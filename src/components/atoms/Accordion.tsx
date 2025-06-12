// AccordionWithIcons.tsx
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";

export default function AccordionWithIcons() {
  return (
    <Box width="100%" maxWidth={600} mx="auto" mt={4}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" alignItems="center" gap={1}>
            <InfoIcon color="primary" />
            <Typography>General Information</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This section contains general information with a custom icon.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" alignItems="center" gap={1}>
            <StarIcon color="secondary" />
            <Typography>Highlights</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This section highlights key features or updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box display="flex" alignItems="center" gap={1}>
            <InfoIcon color="primary" />
            <Typography>General Information</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This section contains general information with a custom icon.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
