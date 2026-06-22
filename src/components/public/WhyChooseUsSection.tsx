import {
    Box,
    Container,
    Grid,
    Typography
} from "@mui/material";

const reasons = [

    "Experienced Drivers",

    "Pan India Network",

    "Fast Delivery Commitment",

    "24/7 Customer Support",

    "Safe Cargo Handling"
];

function WhyChooseUsSection() {

    return (

        <Box
            sx={{
                py: 10
            }}
        >

            <Container maxWidth="lg">

                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                >

                    Why Choose Conway

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 6
                    }}
                >

                    Trusted logistics partner
                    for businesses across India.

                </Typography>

                <Grid
                    container
                    spacing={4}
                >

                    {
                        reasons.map(
                            (reason) => (

                                <Grid
                                    size={{
                                        xs: 12,
                                        md: 4
                                    }}
                                    key={reason}
                                >

                                    <Box
                                        sx={{
                                            p: 3,
                                            textAlign: "center",
                                            border:
                                                "1px solid #eee",
                                            borderRadius: 2
                                        }}
                                    >

                                        <Typography
                                            sx={{ fontWeight: "bold" }}
                                        >

                                            {reason}

                                        </Typography>

                                    </Box>

                                </Grid>

                            )
                        )
                    }

                </Grid>

            </Container>

        </Box>

    );
}

export default WhyChooseUsSection;