import {
    useState
} from "react";

import {
    CircularProgress
}
from "@mui/material";

import {
    Box,
    Button,
    Container,
    Grid,
    MenuItem,
    Paper,
    TextField,
    Typography
} from "@mui/material";

import {
    showSuccess,
    showError
} from "../../utils/toast";

import {
    useCities,
    useTruckTypes,
    useCargoTypes,
    useCreatePublicEnquiry
} from "../../hooks/usePublicEnquiry";

function ContactSection() {

    const citiesQuery =
        useCities();

    const truckTypesQuery =
        useTruckTypes();

    const cargoTypesQuery =
        useCargoTypes();

    const createMutation =
        useCreatePublicEnquiry();

    const [customerName, setCustomerName] =
        useState("");

    const [phoneNumber, setPhoneNumber] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [cityId, setCityId] =
        useState("");

    const [truckTypeId, setTruckTypeId] =
        useState("");

    const [cargoTypeId, setCargoTypeId] =
        useState("");

    const [message, setMessage] =
        useState("");

    const [emailError, setEmailError] =
        useState("");

    const [phoneError, setPhoneError] =
        useState("");


    const [submitted, setSubmitted] =
    useState(false);

    const validateEmail =
        (value: string) => {

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailRegex.test(value)
            ) {

                setEmailError(
                    "Please enter a valid email address"
                );

                return false;
            }

            setEmailError("");

            return true;
        };

    const validatePhone =
        (value: string) => {

            const phoneRegex =
                /^[0-9]{10}$/;

            if (
                !phoneRegex.test(value)
            ) {

                setPhoneError(
                    "Phone number must be exactly 10 digits"
                );

                return false;
            }

            setPhoneError("");

            return true;
        };

    const handleSubmit =
        (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            const emailValid =
                validateEmail(
                    email
                );

            const phoneValid =
                validatePhone(
                    phoneNumber
                );

            if (
                !emailValid ||
                !phoneValid
            ) {

                return;
            }

            createMutation.mutate(
                {
                    customerName,
                    phoneNumber,
                    email,
                    cityId:
                        Number(cityId),
                    truckTypeId:
                        Number(truckTypeId),
                    cargoTypeId:
                        Number(cargoTypeId),
                    message
                },
                {
                    onSuccess: () => {

                        showSuccess(
                            "Enquiry submitted successfully"
                        );

                        setCustomerName("");
                        setPhoneNumber("");
                        setEmail("");
                        setCityId("");
                        setTruckTypeId("");
                        setCargoTypeId("");
                        setMessage("");

                        setEmailError("");
                        setPhoneError("");
                        setSubmitted(true);
                    },

                    onError: () => {

                        showError(
                            "Failed to submit enquiry"
                        );
                    }
                }
            );
        };

    if (
        citiesQuery.isLoading ||
        truckTypesQuery.isLoading ||
        cargoTypesQuery.isLoading
    ) {

        return (
            <h2>
                Loading...
            </h2>
        );
    }
    if (submitted) {

    return (

        <Box
            id="contact"
            sx={{
                py: 10,
                scrollMarginTop: "90px"
            }}
        >

            <Container maxWidth="sm">

                <Paper
                    sx={{
                        p: 5,
                        textAlign: "center"
                    }}
                >

                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >

                        Thank You!

                    </Typography>

                    <Typography>

                        Your enquiry has been
                        submitted successfully.

                        Our logistics team will
                        contact you shortly.

                    </Typography>

                </Paper>

            </Container>

        </Box>
    );
}
    return (

        <Box
            id="contact"
            sx={{
                py: 10
            }}
        >

            <Container maxWidth="md">

                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 'bold' }}
                    gutterBottom
                >

                    Request A Quote

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 5
                    }}
                >

                    Tell us your logistics
                    requirement and our
                    team will contact you.

                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        p: 4
                    }}
                >

                    <form
                        onSubmit={
                            handleSubmit
                        }
                    >

                        <Grid
                            container
                            spacing={3}
                        >

                            <Grid size={{ xs: 12, md: 6 }}>

                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    value={customerName}
                                    onChange={(e) =>
                                        setCustomerName(
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>

                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => {

    const value =
        e.target.value
            .replace(/\D/g, "");

    if (
        value.length <= 10
    ) {

        setPhoneNumber(
            value
        );

        validatePhone(
            value
        );
    }
}}
                                    error={
                                        !!phoneError
                                    }
                                    helperText={
                                        phoneError
                                    }
                                    required
                                />

                            </Grid>

                            <Grid size={{ xs: 12 }}>

                                <TextField
                                    fullWidth
                                    label="Email"
                                    value={email}
                                    onChange={(e) => {

                                        setEmail(
                                            e.target.value
                                        );

                                        validateEmail(
                                            e.target.value
                                        );
                                    }}
                                    error={
                                        !!emailError
                                    }
                                    helperText={
                                        emailError
                                    }
                                    required
                                />

                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>

                                <TextField
                                    select
                                    fullWidth
                                    label="City"
                                    value={cityId}
                                    onChange={(e) =>
                                        setCityId(
                                            e.target.value
                                        )
                                    }
                                    required
                                >

                                    {
                                        citiesQuery.data?.map(
                                            (city) => (

                                                <MenuItem
                                                    key={city.id}
                                                    value={city.id}
                                                >

                                                    {
                                                        city.cityName
                                                    }

                                                </MenuItem>

                                            )
                                        )
                                    }

                                </TextField>

                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>

                                <TextField
                                    select
                                    fullWidth
                                    label="Truck Type"
                                    value={truckTypeId}
                                    onChange={(e) =>
                                        setTruckTypeId(
                                            e.target.value
                                        )
                                    }
                                    required
                                >

                                    {
                                        truckTypesQuery.data?.map(
                                            (truck) => (

                                                <MenuItem
                                                    key={truck.id}
                                                    value={truck.id}
                                                >

                                                    {
                                                        truck.truckName
                                                    }

                                                </MenuItem>

                                            )
                                        )
                                    }

                                </TextField>

                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>

                                <TextField
                                    select
                                    fullWidth
                                    label="Cargo Type"
                                    value={cargoTypeId}
                                    onChange={(e) =>
                                        setCargoTypeId(
                                            e.target.value
                                        )
                                    }
                                    required
                                >

                                    {
                                        cargoTypesQuery.data?.map(
                                            (cargo) => (

                                                <MenuItem
                                                    key={cargo.id}
                                                    value={cargo.id}
                                                >

                                                    {
                                                        cargo.cargoName
                                                    }

                                                </MenuItem>

                                            )
                                        )
                                    }

                                </TextField>

                            </Grid>

                            <Grid size={{ xs: 12 }}>

                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Message"
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                            </Grid>

                            <Grid size={{ xs: 12 }}>

                               <Button
    type="submit"
    variant="contained"
    fullWidth
    size="large"
    disabled={
        createMutation.isPending
    }
>

    {
        createMutation.isPending
            ? (
                <CircularProgress
                    size={24}
                    color="inherit"
                />
            )
            : (
                "Submit Enquiry"
            )
    }

</Button>

                            </Grid>

                        </Grid>

                    </form>

                </Paper>

            </Container>

        </Box>
    );
}

export default ContactSection;