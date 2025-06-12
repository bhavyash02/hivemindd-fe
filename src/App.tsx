import './App.css'
import AccordionUsage from './components/atoms/Accordion';
import SimpleBadge from './components/atoms/Badge';
import theme from './config/styles/theme'
import { Box, Grid, Typography } from "@mui/material";

function App() {
  const palettes = theme.palette?.custom;

  if (!palettes) {
    return <Typography>Custom palette not available.</Typography>;
  }

  return (
    <>
      <Grid container spacing={2}>
        {Object.entries(palettes).map(([groupName, shades]) => (
          <Grid key={groupName}>
            <Typography fontWeight={600} textTransform="capitalize" mb={1}>
              {groupName}
            </Typography>
            <Grid container spacing={1}>
              {Object.entries(shades).map(([shade, hex]) => (
                <Grid key={shade}>
                  <Box
                    sx={{
                      backgroundColor: hex,
                      height: 70,
                      width: 100,
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      color: "#000",
                    }}
                  >
                    
                  </Box>
                  {hex}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
        <h1>Accordion</h1>
        <AccordionUsage />
        <h1>Badge</h1>
        <SimpleBadge />
      </Grid>
    </>
  )
}

export default App
