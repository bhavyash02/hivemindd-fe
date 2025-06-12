import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

interface LoaderBoxProps {
    showSmall?: boolean;
    showMedium?: boolean;
    showLarge?: boolean;
    showXl?: boolean;
    children?: React.ReactNode;
}

const LoaderBox: React.FC<LoaderBoxProps> = ({
    showSmall = false,
    showMedium = false,
    showLarge = false,
    showXl = false,
}) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            {showSmall && (
                <CircularProgress
                    sx={{
                        width: '32px',
                        height: '32px',
                        '--CircularProgress-size': '32px',
                        '--CircularProgress-thickness': '4px',
                    }}
                />
            )}
            {showMedium && <CircularProgress sx={{
                width: '48px',
                height: '48px',
                '--CircularProgress-size': '48px',
                '--CircularProgress-thickness': '6px',
            }} />}
            {showLarge && <CircularProgress sx={{
                width: '56px',
                height: '56px',
                '--CircularProgress-size': '56px',
                '--CircularProgress-thickness': '7px',
            }} />}
            {showXl && (
                <CircularProgress
                    sx={{
                        width: '64px',
                        height: '64px',
                        '--CircularProgress-size': '64px',
                        '--CircularProgress-thickness': '7px',
                    }}
                />
            )}
        </Box>
    );
};

export default LoaderBox;
