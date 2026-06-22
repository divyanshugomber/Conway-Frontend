import {
    Fab
} from "@mui/material";

import WhatsAppIcon
from "@mui/icons-material/WhatsApp";

function WhatsAppButton() {

    return (

        <Fab
            color="success"
            sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 9999
            }}
            onClick={() =>
                window.open(
                    "https://wa.me/919876543210",
                    "_blank"
                )
            }
        >

            <WhatsAppIcon />

        </Fab>

    );
}

export default WhatsAppButton;