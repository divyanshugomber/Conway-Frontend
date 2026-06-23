import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary:    { main: "#FF5200", light: "#FF6B35", dark: "#CC3D00", contrastText: "#fff" },
        secondary:  { main: "#25D366", light: "#4ade80", dark: "#1DA851", contrastText: "#fff" },
        background: { default: "#07090F", paper: "#0C1219" },
        text:       { primary: "#EEF2F7", secondary: "#92A5B8" },
        divider:    "rgba(255,255,255,0.06)",
        error:      { main: "#ef4444" },
        success:    { main: "#25D366" },
    },
    typography: {
        fontFamily: "'Barlow', 'Barlow Condensed', sans-serif",
        h1: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 },
        h2: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 },
        h3: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 },
        h4: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 },
        h5: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 },
        h6: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 },
        button: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px" },
    },
    shape: { borderRadius: 0 }, // Reference uses sharp corners
    components: {
        MuiPaper: {
            styleOverrides: {
                root: { backgroundImage: "none", backgroundColor: "#0C1219", border: "1px solid rgba(255,255,255,0.10)" }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: 0, clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", transition: "all .25s" }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: { backgroundColor: "#07090F", color: "#EEF2F7" }
            }
        }
    }
});

export default theme;