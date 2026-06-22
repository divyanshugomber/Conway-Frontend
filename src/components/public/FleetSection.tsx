import {
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";

const fleet = [

    {
        name: "14 Ft Truck",
        description:
            "Ideal for city and regional deliveries."
    },

    {
        name: "17 Ft Truck",
        description:
            "Medium-sized freight transportation."
    },

    {
        name: "22 Ft Truck",
        description:
            "Large commercial transportation."
    },

    {
        name: "32 Ft Container",
        description:
            "Long-distance interstate logistics."
    }

];

function FleetSection() {

    return (

        <Box
        id="fleet"
        data-aos="fade-up"
            sx={{
                py: 10,
                bgcolor: "#f8fafc",
                scrollMarginTop: "90px"
            }}
        >

            <Container maxWidth="lg">

                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        fontWeight: "bold"
                    }}
                    gutterBottom
                >

                    Our Fleet

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 6
                    }}
                >

                    Modern vehicles designed
                    to move cargo safely and efficiently.

                </Typography>

                <Grid
                    container
                    spacing={4}
                >

                    {
                        fleet.map(
                            (truck) => (

                                <Grid
                                    size={{
                                        xs: 12,
                                        sm: 6
                                    }}
                                    key={truck.name}
                                >

                                    <Paper
                                        elevation={2}
                                        sx={{
                                            p: 4
                                        }}
                                    >

                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: "bold"
                                            }}
                                            gutterBottom
                                        >

                                            {truck.name}

                                        </Typography>

                                        <Typography
                                            color="text.secondary"
                                        >

                                            {truck.description}

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

export default FleetSection;