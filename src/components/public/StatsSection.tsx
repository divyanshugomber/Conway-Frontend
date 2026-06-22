import {
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";

const stats = [

    {
        title: "5000+",
        subtitle: "Deliveries Completed"
    },

    {
        title: "20+",
        subtitle: "Cities Covered"
    },

    {
        title: "24/7",
        subtitle: "Customer Support"
    },

    {
        title: "99%",
        subtitle: "Customer Satisfaction"
    }
];

function StatsSection() {

    return (

        <Box
            sx={{
                py: 8,
                bgcolor: "#f8fafc"
            }}
        >

            <Container maxWidth="lg">

                <Grid
                    container
                    spacing={3}
                >

                    {
                        stats.map(
                            (stat) => (

                                <Grid
                                    size={{
                                        xs: 12,
                                        sm: 6,
                                        md: 3
                                    }}
                                    key={stat.title}
                                >

                                    <Paper
                                        elevation={2}
                                        sx={{
                                            p: 4,
                                            textAlign: "center",
                                            height: "100%"
                                        }}
                                    >

                                        <Typography
                                            variant="h3"
                                            color="primary"
                                            sx={{ fontWeight: "bold" }}
                                        >

                                            {stat.title}

                                        </Typography>

                                        <Typography
                                            color="text.secondary"
                                        >

                                            {stat.subtitle}

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

export default StatsSection;