import {
    Box,
    Chip,
    Container,
    Stack,
    Typography
} from "@mui/material";

const cities = [

    "Delhi",
    "Mumbai",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Kolkata"
];

function CoverageSection() {

    return (

        <Box
        id="coverage"
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
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                >

                    Coverage Network

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 5
                    }}
                >

                    Delivering across major cities in India.

                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    useFlexGap
                    sx={{
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}
                >

                    {
                        cities.map(
                            (city) => (

                                <Chip
                                    key={city}
                                    label={city}
                                    color="primary"
                                />

                            )
                        )
                    }

                </Stack>

            </Container>

        </Box>

    );
}

export default CoverageSection;