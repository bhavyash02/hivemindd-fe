import React from 'react';
import {
    Box,
    InputBase,
    Typography,
    Stack,
    styled,
} from '@mui/material';

interface CustomInputProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: 'box' | 'line'; // NEW PROP
}

const LeftIcon = styled(Box)({
    width: 27,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    marginRight: 8,
});
const RightIcon = styled(Box)({
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    marginRight: 8,
});

const RightAddOns = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
});

const VisaBox = styled(Box)({
    width: '34px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const VisaSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
        <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
        <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F5F5F5" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7501 15.8583H8.69031L7.14576 9.79238C7.07245 9.51335 6.91679 9.26667 6.68782 9.15041C6.11639 8.85824 5.48672 8.62571 4.7998 8.50844V8.2749H8.11789C8.57583 8.2749 8.91929 8.62571 8.97653 9.03314L9.77793 13.4087L11.8367 8.2749H13.8392L10.7501 15.8583ZM14.984 15.8583H13.0388L14.6406 8.2749H16.5858L14.984 15.8583ZM19.1025 10.3757C19.1597 9.96728 19.5032 9.73375 19.9039 9.73375C20.5336 9.67511 21.2195 9.79238 21.7919 10.0835L22.1354 8.45082C21.5629 8.21728 20.9333 8.10001 20.3619 8.10001C18.4738 8.10001 17.1 9.15041 17.1 10.6082C17.1 11.7173 18.0731 12.2996 18.7601 12.6504C19.5032 13.0002 19.7894 13.2338 19.7322 13.5836C19.7322 14.1083 19.1597 14.3418 18.5883 14.3418C17.9014 14.3418 17.2145 14.1669 16.5858 13.8747L16.2424 15.5085C16.9293 15.7996 17.6724 15.9169 18.3594 15.9169C20.4763 15.9745 21.7919 14.9251 21.7919 13.35C21.7919 11.3665 19.1025 11.2502 19.1025 10.3757ZM28.5998 15.8583L27.0553 8.2749H25.3962C25.0528 8.2749 24.7093 8.50844 24.5948 8.85824L21.7347 15.8583H23.7372L24.1369 14.7502H26.5973L26.8263 15.8583H28.5998ZM25.6824 10.3171L26.2539 13.1751H24.6521L25.6824 10.3171Z"
            fill="#0D04F5"
        />
    </svg>
);

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    placeholder = 'Placeholder',
    helperText,
    value,
    onChange,
    variant = 'box',
}) => {
    return (
        <Stack spacing={1} width={400}>
            {label && (
                <Box>
                    <Typography
                        sx={{
                            color: 'var(--neutral-900-main, #111)',
                            fontFamily: 'var(--Font, Inter)',
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: '20px',
                            alignItems: 'flex-start',
                            display: 'flex',
                        }}
                    >
                        {label}
                    </Typography>
                </Box>
            )}
            <Box
                sx={
                    variant === 'box'
                        ? {
                            position: 'relative',
                            borderRadius: '8px',
                            padding: '2px',
                            background: 'linear-gradient(90deg, #B2A7FF, #A6A3FC)',
                            '&:focus-within': {
                                background: 'linear-gradient(90deg, #0D04F5, #4A3CFF)',
                            },
                        }
                        : {
                            borderBottom: '1px solid var(--Primary-300, #B2A7FF)',
                            '&:focus-within': {
                                borderBottom: '1px solid var(--Primary-600, #4A3CFF)',
                            },
                        }
                }
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        borderRadius: variant === 'box' ? '6px' : 0,
                        backgroundColor: '#fff',
                        padding: '8px 12px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flex: '1 0 0',
                        }}
                    >
                        <LeftIcon />
                        <InputBase
                            placeholder={placeholder}
                            fullWidth
                            value={value}
                            onChange={onChange}
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '20px',
                                fontFamily: 'var(--Font, Inter)',
                                color: 'var(--neutral-900-main, #111)',
                                '&::placeholder': {
                                    color: 'var(--Neutral-600, #A3A3A3)',
                                },
                            }}
                        />
                    </Box>

                    <RightAddOns>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '20px',
                                fontFamily: 'var(--Font, Inter)',
                                color: 'var(--Neutral-400, #A3A3A3)',
                            }}
                        >
                            Add-on
                        </Typography>
                        <RightIcon />
                        <VisaBox>
                            <VisaSVG />
                        </VisaBox>
                    </RightAddOns>
                </Box>
            </Box>

            {helperText && (
                <Typography
                    sx={{
                        color: 'var(--Neutral-600, #525252)',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        alignSelf: 'stretch',
                        alignItems: 'flex-start',
                        display: 'flex',
                    }}
                >
                    {helperText}
                </Typography>
            )}
        </Stack>
    );
};

export default CustomInput;
