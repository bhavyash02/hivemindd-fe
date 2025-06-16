import * as React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import theme from '../../config/styles/theme';

type CustomCheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export default function ControlledCheckbox({
  label,
  checked,
  onChange,
  disabled = false,
}: CustomCheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          sx={{
            color: theme.palette.custom.netural[300],
            '&.Mui-checked': {
              color: theme.palette.custom.primaryBlue[500],
            },
          }}
        />
      }
      label={label}
    />
  );
}

