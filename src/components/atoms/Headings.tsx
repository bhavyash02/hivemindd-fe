import React from 'react';
import { Box, Typography } from '@mui/material';

interface LabeledHeadingProps {
  heading: string;
}

const LabeledHeading: React.FC<LabeledHeadingProps> = ({ heading }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        height: 56,
        padding: 2,
        flexShrink: 0,
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 40,
          height: 40,
          backgroundColor: '#ECEBFF',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: '4px',
            backgroundColor: '#BDB4FF',
          }}
        />
      </Box>

      {/* Heading */}
      <Typography
        sx={{
          color: 'var(--neutral-900-main, #111)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '32px',
          letterSpacing: '-0.48px',
          fontVariantNumeric: 'lining-nums proportional-nums',
        }}
      >
        {heading}
      </Typography>
    </Box>
  );
};

export default LabeledHeading;
