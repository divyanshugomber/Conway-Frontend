import {
    useState
} from "react";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";

import {
    LocalShipping,
    Menu
} from "@mui/icons-material";

function Navbar() {

    const [mobileOpen, setMobileOpen] =
        useState(false);

    const scrollToSection =
        (id: string) => {

            document
                .getElementById(id)
                ?.scrollIntoView({
                    behavior: "smooth"
                });

            setMobileOpen(false);
        };

    const menuItems = [

        {
            label: "Services",
            id: "services"
        },

        {
            label: "Fleet",
            id: "fleet"
        },

        {
            label: "Coverage",
            id: "coverage"
        },

        {
            label: "Contact",
            id: "contact"
        }

    ];

    return (

        <>

            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background:
                        "rgba(15,76,129,0.92)",
                    backdropFilter:
                        "blur(10px)"
                }}
            >

                <Toolbar>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1
                        }}
                    >

                        <LocalShipping
                            sx={{
                                mr: 1
                            }}
                        />

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold"
                            }}
                        >

                            Conway Logistics

                        </Typography>

                    </Box>

                    {/* Desktop Menu */}

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        }}
                    >

                        {
                            menuItems.map(
                                (item) => (

                                    <Button
                                        key={item.id}
                                        color="inherit"
                                        onClick={() =>
                                            scrollToSection(
                                                item.id
                                            )
                                        }
                                    >

                                        {
                                            item.label
                                        }

                                    </Button>

                                )
                            )
                        }

                    </Box>

                    {/* Mobile Menu Button */}

                    <IconButton
                        color="inherit"
                        sx={{
                            display: {
                                xs: "block",
                                md: "none"
                            }
                        }}
                        onClick={() =>
                            setMobileOpen(
                                true
                            )
                        }
                    >

                        <Menu />

                    </IconButton>

                </Toolbar>

            </AppBar>

            {/* Mobile Drawer */}

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() =>
                    setMobileOpen(
                        false
                    )
                }
            >

                <Box
                    sx={{
                        width: 250
                    }}
                >

                    <List>

                        {
                            menuItems.map(
                                (item) => (

                                    <ListItem
                                        key={item.id}
                                        disablePadding
                                    >

                                        <ListItemButton
                                            onClick={() =>
                                                scrollToSection(
                                                    item.id
                                                )
                                            }
                                        >

                                            <ListItemText
                                                primary={
                                                    item.label
                                                }
                                            />

                                        </ListItemButton>

                                    </ListItem>

                                )
                            )
                        }

                    </List>

                </Box>

            </Drawer>

        </>

    );
}

export default Navbar;