import { IconProps } from "@mui/material/Icon";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

interface NavBarProps {
    pages: string[];
    pagePaths: string[];
    currentPage: number;
    icon?: IconProps;
}

export const NavBar = ({
    pages = ["Home", "YPGG", "About"],
    pagePaths,
    currentPage = 0,
}: NavBarProps) => {

    const navigate = useNavigate();

    let homeTabColor = "white";
    let ypggTabColor = "white";
    let aboutTabColor = "white";
    switch(currentPage) {
        case 0:
            homeTabColor = "DD1111";
            break;
        case 1:
            ypggTabColor = "#696969";
            break;            
        case 2:
            aboutTabColor = "#1127FF";
            break;
    }
    


    return (
        <Box>
            <AppBar 
                variant="outlined" 
                sx={{
                    backgroundColor: "black",
                    flexDirection: "row"
                }}
            >
                <Button 
                    variant="contained" 
                    onClick={() => navigate(pagePaths[0])}
                    sx={{
                    backgroundColor: homeTabColor,
                    "&:hover": {
                        backgroundColor: "#DD1111"
                    },
                    maxHeight: 25, 
                    margin: 1, 
                    padding: 1,
                    flexGrow: 2}}
                >
                    {pages[0]}
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => navigate(pagePaths[1])}
                    sx={{
                    backgroundColor: ypggTabColor,
                    "&:hover": {
                        backgroundColor: "#696969"
                    },
                    maxHeight: 25, 
                    margin: 1, 
                    padding: 1,
                    flexGrow: 2}}
                >
                    {pages[1]}
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => navigate(pagePaths[2])}
                    sx={{
                    backgroundColor: aboutTabColor,
                    "&:hover": {
                        backgroundColor: "#1127FF"
                    },
                    maxHeight: 25, 
                    margin: 1, 
                    padding: 1,
                    flexGrow: 2}}
                >
                    {pages[2]}
                </Button>
            </AppBar>
        </Box>
    );
};