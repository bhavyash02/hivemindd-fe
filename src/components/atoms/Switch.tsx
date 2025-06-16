import * as React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import theme from '../../config/styles/theme';

type CustomSwitchProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export default function CustomSwitch({
  label,
  checked,
  onChange,
  disabled = false,
}: CustomSwitchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          inputProps={{ 'aria-label': label || 'custom-switch' }}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: theme.palette.custom.primaryBlue[500],
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: theme.palette.custom.primaryBlue[500],
            },
            '& .MuiSwitch-switchBase': {
              color: theme.palette.custom.netural[300],
            },
            '& .MuiSwitch-track': {
              backgroundColor: theme.palette.custom.netural[300],
            },
          }}
        />
      }
      label={label}
    />
  );
}
