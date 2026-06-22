import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Avatar,
    Rating
} from "@mui/material";

const testimonials = [

    {
        name: "Rahul Sharma",
        company: "Industrial Equipment Supplier",
        rating: 5,
        review:
            "Conway helped us transport heavy industrial machinery across multiple states without delays. Excellent service and communication."
    },

    {
        name: "Aman Gupta",
        company: "FMCG Distributor",
        rating: 5,
        review:
            "Reliable logistics partner with transparent pricing. Their team handled urgent shipments professionally."
    },

    {
        name: "Priya Mehta",
        company: "Retail Business Owner",
        rating: 5,
        review:
            "Fast response time and smooth transportation process. Highly recommended for nationwide deliveries."
    }

];

function TestimonialsSection() {

    return (

        <Box
        data-aos="zoom-in"
            sx={{
                py: 10,
                bgcolor: "#f8fafc"
            }}
        >

            <Container maxWidth="lg">

                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >

                    What Our Clients Say

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 6
                    }}
                >

                    Trusted by businesses across India

                </Typography>

                <Grid
                    container
                    spacing={4}
                >

                    {
                        testimonials.map(
                            (testimonial) => (

                                <Grid
                                    key={
                                        testimonial.name
                                    }
                                    size={{
                                        xs: 12,
                                        md: 4
                                    }}
                                >

                                    <Paper
                                        elevation={4}
                                        sx={{
                                            p: 4,
                                            height: "100%",
                                            borderRadius: 4
                                        }}
                                    >

                                        <Rating
                                            value={
                                                testimonial.rating
                                            }
                                            readOnly
                                            sx={{
                                                mb: 2
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                mb: 3,
                                                lineHeight: 1.8
                                            }}
                                        >

                                            "
                                            {
                                                testimonial.review
                                            }
                                            "

                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2
                                            }}
                                        >

                                            <Avatar>

                                                {
                                                    testimonial.name[0]
                                                }

                                            </Avatar>

                                            <Box>

                                                <Typography
                                                    sx={{ fontWeight: 'bold' }}
                                                >
                                                    {testimonial.name}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >

                                                    {
                                                        testimonial.company
                                                    }

                                                </Typography>

                                            </Box>

                                        </Box>

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

export default TestimonialsSection;