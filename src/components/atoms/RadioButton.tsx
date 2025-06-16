import * as React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import theme from '../../config/styles/theme';

type Option = {
  label: string;
  value: string;
};

type CustomRadioGroupProps = {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  disabled?: boolean;
};

export default function CustomRadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  disabled = false,
}: CustomRadioGroupProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      {label && <FormLabel id={`${name}-label`}>{label}</FormLabel>}
      <RadioGroup
        aria-labelledby={`${name}-label`}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: theme.palette.custom.netural[300],
                  '&.Mui-checked': {
                    color: theme.palette.custom.primaryBlue[500],
                  },
                }}
              />
            }
            label={option.label}
            disabled={disabled}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
