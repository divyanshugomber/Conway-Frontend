import {
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";

import {
    LocalShipping,
    Inventory2,
    Route,
    Warehouse
} from "@mui/icons-material";

const services = [

    {
        icon: <LocalShipping fontSize="large" />,
        title: "Full Truck Load",
        description:
            "Dedicated truck transportation across India."
    },

    {
        icon: <Inventory2 fontSize="large" />,
        title: "Part Load Services",
        description:
            "Affordable transportation for smaller consignments."
    },

    {
        icon: <Route fontSize="large" />,
        title: "Express Delivery",
        description:
            "Fast and time-sensitive freight movement."
    },

    {
        icon: <Warehouse fontSize="large" />,
        title: "Industrial Logistics",
        description:
            "Heavy cargo and industrial transportation solutions."
    }
];

function ServicesSection() {

    return (

        <Box
        id="services"
        data-aos="fade-up"
            sx={{
                py: 10,
                scrollmarginTop: "90px"
            }}
        >

            <Container maxWidth="lg">

                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                >

                    Our Services

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 6
                    }}
                >

                    Reliable logistics solutions
                    tailored for businesses
                    across India.

                </Typography>

                <Grid
                    container
                    spacing={4}
                >

                    {
                        services.map(
                            (service) => (

                                <Grid
                                    size={{
                                        xs: 12,
                                        md: 6
                                    }}
                                    key={service.title}
                                >

                                    <Paper
                                        elevation={2}
                                        sx={{
                                            p: 4,
                                            height: "100%"
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                color:
                                                    "primary.main",
                                                mb: 2
                                            }}
                                        >

                                            {service.icon}

                                        </Box>

                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: "bold" }}
                                            gutterBottom
                                        >

                                            {
                                                service.title
                                            }

                                        </Typography>

                                        <Typography
                                            color="text.secondary"
                                        >

                                            {
                                                service.description
                                            }

                                        </Typography>

                                    </Paper>

                                </Grid>

                            )
                        )
                    }

                </Grid>

            </Container>

        </Box>

    );
}

export default ServicesSection;