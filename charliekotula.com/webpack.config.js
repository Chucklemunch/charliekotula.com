/* eslint-disable import/no-anonymous-default-export */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';
// import webpack from 'webpack';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
        buffer: require.resolve('buffer/')
    },
    // Add this to handle ES modules properly
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        // options: {
        //   lazy: true,
        // },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },    
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
            filename: "images/[name][hash][ext][query]",
        },
    },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'host',
        remotes: {
            muse: "muse@http://localhost:8081/remoteEntry.js"
        },
        shared: {
            react: { singleton: true, requiredVersion: '^18.0.0' },
            'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
            'react-router-dom': { singleton: true },
            // Share Tone.js to avoid duplication
            'tone': { singleton: true }
        }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    //   template: "./index.html",
    }),
    // new webpack.ProvidePlugin({
    //     Buffer: ['buffer', 'Buffer']
    // })
  ],
};