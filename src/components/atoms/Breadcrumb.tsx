import React from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';

type BreadcrumbState = 'default' | 'active' | 'hover' | 'disabled';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    state?: BreadcrumbState;
}

interface CustomBreadcrumbsProps {
    items: BreadcrumbItem[];
}

const IconBox: React.FC<{ color?: string }> = ({ color }) => (
    <Box
        sx={{
            width: 20,
            height: 20,
            borderRadius: '4px',
            backgroundColor: color || 'rgba(255,255,255,0.3)',
            flexShrink: 0,
            display: 'inline-block',
        }}
    />
);

const getIconColor = (state: BreadcrumbState): string => {
    switch (state) {
        case 'active':
        case 'hover':
            return 'rgba(103, 80, 164, 0.3)';
        case 'disabled':
        default:
            return '#D3D3D3';
    }
};

const breadcrumbTextSx = {
    color: 'var(--Neutral-700, #404040)',
    // fontFamily: 'var(--Font, Inter)',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
};

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ items }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" separator="/">
            {items.map((item, index) => {
                const { label, href = '#', state = 'default' } = item;
                const iconColor = getIconColor(state);
                const baseSx = {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                };

                if (state === 'disabled') {
                    return (
                        <Typography key={index} sx={{ ...baseSx, ...breadcrumbTextSx }}>
                            <IconBox color={iconColor} />
                            {label}
                        </Typography>
                    );
                }

                return (
                    <Link
                        key={index}
                        href={href}
                        sx={{ ...baseSx, textDecoration: 'none' }}
                        underline='hover'
                        color={state === 'active' ? 'primary' : 'text.secondary'}
                    >
                        <IconBox color={iconColor} />
                        <Typography sx={breadcrumbTextSx}>
                            {label}
                        </Typography>
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default CustomBreadcrumbs;
