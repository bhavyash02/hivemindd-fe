import * as React from 'react';
import {
    Alert,
    AlertTitle,
    Typography,
    IconButton,
    Box,
} from '@mui/material';
import type { AlertProps } from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

interface CustomAlertProps extends Omit<AlertProps, 'title'> {
    title: string;
    description?: string;
    actions?: string[];
    backgroundColor?: string;
    borderColor?: string;
    iconColor?: string;
    titleColor?: string;
    textColor?: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
    title,
    description,
    actions = [],
    backgroundColor,
    borderColor,
    iconColor,
    titleColor,
    textColor,
    onClose,
    ...alertProps
}) => {
    return (
        <Alert
            icon={
                <Box
                    sx={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        background: iconColor,
                        mt: '2px',
                    }}
                />
            }
            action={
                onClose && (
                    <IconButton
                        size="small"
                        onClick={onClose as React.MouseEventHandler<HTMLButtonElement>}
                        sx={{ color: titleColor }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )
            }
            {...alertProps}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '8px',
                padding: '12px 20px',
                width: '100%',
                background: backgroundColor,
                border: `1px solid ${borderColor}`,
                borderRadius: '6px',
                color: titleColor,
                '& .MuiAlert-message': {
                    flexGrow: 1,
                    padding: 0,
                },
                '& .MuiAlert-icon': {
                    mt: '2px',
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                }}
            >
                <AlertTitle
                    sx={{
                        // fontFamily: 'var(--Font, Inter)',
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '20px',
                        color: titleColor,
                        mb: '4px',
                    }}
                >
                    {title}
                </AlertTitle>

                {description && (
                    <Typography
                        sx={{
                            // fontFamily: 'var(--Font, Inter)',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '20px',
                            color: textColor,
                            mb: actions.length ? '12px' : 0,
                        }}
                    >
                        {description}
                    </Typography>
                )}

                {actions.length > 0 && (
                    <Box display="flex" gap={2}>
                        {actions.map((label, idx) => (
                            <Typography
                                key={idx}
                                sx={{
                                    // fontFamily: 'var(--Font, Inter)',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    lineHeight: '20px',
                                    color: titleColor,
                                    cursor: 'pointer',
                                }}
                            >
                                {label}
                            </Typography>
                        ))}
                    </Box>
                )}
            </Box>
        </Alert>
    );
};

export default CustomAlert;
