import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

interface SidebarNavItemProps {
    label: string;
    count: number;
    color?: string; // Optional color prop for customization
}

const DownArrowIcon = () => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 5L6 8L9 5"
            stroke="#1E1EFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ label, count, color }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '256px',
                padding: '8px 12px',
                alignItems: 'center',
                borderRadius: '6px',
                backgroundColor: '#E7E6FE', // --Primary-Blue-50
                gap: 1.5,
            }}
        >
            {/* Colored square icon */}
            <Box
                sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '4px',
                    backgroundColor: '#BFB8FF',
                }}
            />
            {/* Label */}
            <Typography
                sx={{
                    color: color,
                    // fontFamily: 'var(--Font, Inter)',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '20px',
                    flexGrow: 1,
                }}
            >
                {label}
            </Typography>
            {/* Count pill */}
            <Box
                sx={{
                    borderRadius: '12px',
                    backgroundColor: '#BFB8FF',
                    padding: '2px 8px',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#1E1EFF',
                }}
            >
                {count.toString().padStart(2, '0')}
            </Box>
            {/* Dropdown arrow */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 16,
                    height: 16,
                    ml: 0.5,
                }}
            >
                <DownArrowIcon />
            </Box>

        </Box>
    );
};

export default SidebarNavItem;
