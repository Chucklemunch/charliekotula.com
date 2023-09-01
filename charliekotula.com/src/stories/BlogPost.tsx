import { Paper } from "@mui/material";

interface BlogPostProps {
    title: string,
    postedDate: string
    children: any
}

export const BlogPost = (props: BlogPostProps) => {
    return(
        <Paper 
            elevation={12}
            sx={{
                maxWidth: 1000,
                margin: 5,
                backgroundColor: "#EFEFEF"
            }}
        >
            <div 
                style={{
                    fontFamily: "Verdana",
                    paddingTop: 15,
                    paddingBottom: 25,
                    paddingLeft: 50,
                    paddingRight: 50
                }}
            >
                <h5>{props.postedDate}</h5> 
                <h2>{props.title}</h2>
                <div>
                    {props.children}
                </div>
            </div>
        </Paper>
    );
};