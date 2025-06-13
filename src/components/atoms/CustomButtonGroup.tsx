import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import theme from '../../config/styles/theme';

interface CustomIconButtonProps extends ButtonProps {
    label: string;
    state?: 'default' | 'hover' | 'pressed' | 'active' | 'disabled';
}

const getStateColors = (state: string) => {
    const primary = theme.palette.custom.primaryBlue;
    const netural = theme.palette.custom.netural;

    const colors: Record<string, any> = {
        default: {
            bg: '#fff',
            text: netural[700],
            border: '#C2C2C2',
            iconBg: '#C2C2C2',
        },
        hover: {
            bg: '#F5F5F5',
            text: netural[700],
            border: '#C2C2C2',
            iconBg: '#C2C2C2',
        },
        pressed: {
            bg: '#E0E0E0',
            text: netural[700],
            border: '#C2C2C2',
            iconBg: '#C2C2C2',
        },
        active: {
            bg: primary[500],
            text: '#FFFFFF',
            border: primary[500],
            iconBg: 'rgba(255, 255, 255, 0.3)',
        },
        disabled: {
            bg: '#F0F0F0',
            text: '#B3B3B3',
            border: '#E0E0E0',
            iconBg: '#C2C2C2',
        },
    };

    return colors[state] || colors.default;
};

const IconBox = ({ bg }: { bg: string }) => (
    <Box
        sx={{
            width: 20,
            height: 20,
            borderRadius: '4px',
            backgroundColor: bg,
        }}
    />
);

export const CustomIconButton: React.FC<CustomIconButtonProps> = ({
    label,
    state = 'default',
    ...props
}) => {
    const { bg, text, border, iconBg } = getStateColors(state);

    return (
        <Button
            variant="outlined"
            disabled={state === 'disabled'}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1.5,
                px: 2,
                py: 1,
                minWidth: 140,
                border: `1px solid ${border}`,
                borderRadius: '8px',
                textTransform: 'none',
                boxShadow: 'none',
                backgroundColor: bg,
                '&:hover': {
                    backgroundColor: state === 'hover' ? '#F5F5F5' : bg,
                },
            }}
            {...props}
        >
            <IconBox bg={iconBg} />
            <Typography
                sx={{
                    color: text,
                    // fontFamily: 'var(--Font, Inter)',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '20px',
                }}
            >
                {label}
            </Typography>
            <IconBox bg={iconBg} />
        </Button>
    );
};
