import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Alignment = 'left' | 'center';

interface StickyAlertProps {
  message: string;
  alignment?: Alignment;
  buttons?: string[];
  color?: string;
  iconColor?: string;
}

const IconBox = ({ iconColor }: { iconColor?: string }) => (
  <Box
    sx={{
      width: 20,
      height: 20,
      borderRadius: '4px',
      backgroundColor: iconColor || 'rgba(255,255,255,0.3)',
      flexShrink: 0,
    }}
  />
);

export const StickyAlert: React.FC<StickyAlertProps> = ({
  message,
  alignment = 'left',
  buttons = [],
  color = '',
  iconColor,
}) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const alertStyle = {
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    width: '100%',
    backgroundColor: color,
    py: '12px',
    display: 'flex',
    justifyContent: 'center',
  };

  const innerStyle = {
    width: '1440px',
    height: '59.63px',
    px: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexShrink: 0,
    backgroundColor: color,
    position: 'relative' as const,
  };

  const textStyles = {
    color: '#FFFFFF',
    // fontFamily: "var(--Font, Inter)",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: '20px',
  };

  const buttonStyles = {
    contained: {
      backgroundColor: '#FFFFFF',
      color,
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: '6px',
      px: 2,
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
    },
    outlined: {
      borderColor: '#FFFFFF',
      color: '#FFFFFF',
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: '6px',
      px: 2,
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: '#FFFFFF',
      },
    },
  };

  return (
    <Box sx={alertStyle}>
      <Box
        sx={{
          ...innerStyle,
          justifyContent:
            alignment === 'left'
              ? 'flex-start'
              : 'center',
        }}
      >
        {alignment === 'center' ? (
          <>
            {/* Center aligned message */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <IconBox iconColor={iconColor} />
              <Typography sx={textStyles}>{message}</Typography>
            </Box>

            {/* Buttons & close icon to right */}
            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
              {buttons.map((label, index) => (
                <Button
                  key={index}
                  variant={'contained'}
                  sx={buttonStyles.contained}
                >
                  {label}
                </Button>
              ))}
              <IconButton onClick={() => setVisible(false)} sx={{ color: '#FFFFFF' }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </>
        ) : (
          <>
            {/* Left or right aligned message */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <IconBox iconColor={iconColor} />
              <Typography sx={textStyles}>{message}</Typography>
            </Box>

            {/* Buttons & close icon to right */}
            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
              {buttons.map((label, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'contained' : 'outlined'}
                  sx={index === 0 ? buttonStyles.contained : buttonStyles.outlined}
                >
                  {label}
                </Button>
              ))}
              <IconButton onClick={() => setVisible(false)} sx={{ color: '#FFFFFF' }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
