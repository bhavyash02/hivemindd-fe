import './App.css'
import AccordionUsage from './components/atoms/Accordion';
import Divider from './components/atoms/Divider';
import SimpleBadge from './components/atoms/Badge';
import theme from './config/styles/theme'
import { Box, Grid, Typography } from "@mui/material";
import LabeledHeadingWithBadge from './components/atoms/Headings';
import BasicTabs from './components/atoms/Tabs'; // <-- Correct component
import Buttons from './components/atoms/Buttons';

function App() {
  const palettes = theme.palette?.custom;

  if (!palettes) {
    return <Typography>Custom palette not available.</Typography>;
  }

  const tabs = [
    { label: 'Inbox', count: 99, content: <div>Your inbox messages</div> },
    { label: 'Drafts', count: 2, content: <div>Saved drafts</div> },
    { label: 'Sent', count: 12, content: <div>Sent messages</div> },
  ];

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
                  />
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
        <h2>Divider</h2>
        <Divider />
        <h2>Reusable Tabs Example</h2>
        <BasicTabs tabs={tabs} />
        <Box>
          <h2>Headings</h2>
          <LabeledHeadingWithBadge
            heading="Hivemind"
          />

          <Buttons />
        </Box>

      </Grid>
    </>
  )
}

export default App;
