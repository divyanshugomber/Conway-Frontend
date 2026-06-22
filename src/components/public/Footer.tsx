import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Link
} from "@mui/material";

import {
    LocalShipping,
    Email,
    Phone,
    LocationOn
} from "@mui/icons-material";

function Footer() {

    const scrollToSection =
        (id: string) => {

            document
                .getElementById(id)
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        };

    return (

        <Box
            sx={{
                bgcolor: "#0B2F4A",
                color: "white",
                pt: 8,
                pb: 3
            }}
        >

            <Container maxWidth="lg">

                <Grid
                    container
                    spacing={5}
                >

                    {/* Company */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 4
                        }}
                    >

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                alignItems: "center",
                                mb: 2
                            }}
                        >

                            <LocalShipping />

                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 'bold' }}
                            >

                                Conway Logistics

                            </Typography>

                        </Stack>

                        <Typography
                            sx={{
                                opacity: 0.85,
                                lineHeight: 1.8
                            }}
                        >

                            Reliable transportation,
                            freight movement and
                            logistics solutions
                            across India.

                        </Typography>

                    </Grid>

                    {/* Quick Links */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 4
                        }}
                    >

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 'bold' }}
                            gutterBottom
                        >

                            Quick Links

                        </Typography>

                        <Stack spacing={1}>

                            <Link
                                component="button"
                                color="inherit"
                                underline="none"
                                onClick={() =>
                                    scrollToSection(
                                        "services"
                                    )
                                }
                            >

                                Services

                            </Link>

                            <Link
                                component="button"
                                color="inherit"
                                underline="none"
                                onClick={() =>
                                    scrollToSection(
                                        "fleet"
                                    )
                                }
                            >

                                Fleet

                            </Link>

                            <Link
                                component="button"
                                color="inherit"
                                underline="none"
                                onClick={() =>
                                    scrollToSection(
                                        "coverage"
                                    )
                                }
                            >

                                Coverage

                            </Link>

                            <Link
                                component="button"
                                color="inherit"
                                underline="none"
                                onClick={() =>
                                    scrollToSection(
                                        "contact"
                                    )
                                }
                            >

                                Contact

                            </Link>

                        </Stack>

                    </Grid>

                    {/* Contact */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 4
                        }}
                    >

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 'bold' }}
                            gutterBottom
                        >

                            Contact Us

                        </Typography>

                        <Stack spacing={2}>

                            <Stack
                                direction="row"
                                spacing={1}
                            >

                                <Phone />

                                <Typography>

                                    +91 98765 43210

                                </Typography>

                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1}
                            >

                                <Email />

                                <Typography>

                                    contact@conway.com

                                </Typography>

                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1}
                            >

                                <LocationOn />

                                <Typography>

                                    Serving Pan India

                                </Typography>

                            </Stack>

                        </Stack>

                    </Grid>

                </Grid>

                <Box
                    sx={{
                        mt: 5,
                        pt: 3,
                        borderTop:
                            "1px solid rgba(255,255,255,0.15)",
                        textAlign: "center"
                    }}
                >

                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.7
                        }}
                    >

                        © 2026 Conway Logistics.
                        All Rights Reserved.

                    </Typography>

                </Box>

            </Container>

        </Box>
    );
}

export default Footer;