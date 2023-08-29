import type { Meta, StoryObj } from '@storybook/react';

import { NavBar } from "./NavBar";

const meta = {
  title: 'Navigation/NavBar',
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBarStory: Story = {
    args: {
        pages: ["Home", "YPGG", "About"],
        pagePaths: ["/", "/", "/"],
        
        currentPage: 1
    },
};