import React from 'react';
import {
  Box,
  Card,
  Typography,
  Avatar,
  Stack,
  Chip,
  useTheme,
} from '@mui/material';
import theme from '../../config/styles/theme';

type StatsCardProps = {
  icon: React.ReactNode;
  overline: string;
  label: string;
  description: string;
  percentage: string;
};

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  overline,
  label,
  description,
  percentage,
}) => {
//   const theme = useTheme();

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: theme.palette.custom.primaryBlue[50],
            color: theme.palette.custom.primaryBlue[100],
            width: 48,
            height: 48,
          }}
        >
          {icon}
        </Avatar>

        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight={600}
            gutterBottom
          >
            {overline}
          </Typography>

          <Typography
            variant="h6"
            fontWeight={700}
          >
            {label}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{marginLeft:'10px'}}>
            {description}
          </Typography>
        </Box>
      </Stack>

      <Chip
        label={percentage}
        sx={{
          bgcolor: theme.palette.custom.Green[50],
          color: theme.palette.custom.Green[500],
          fontWeight: 600,
          borderRadius: '16px',
          px: 1.5,
        }}
      />
    </Card>
  );
};

export default StatsCard;
