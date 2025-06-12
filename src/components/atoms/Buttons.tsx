import { Button, Typography, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import theme from "../../config/styles/theme";

const Buttons = () => {
    return (
        <>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: theme.palette.custom.primaryBlue[500],
                    color: '#fff',
                    borderRadius: '16px',
                    padding: '12px 16px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    '&:hover': {
                        backgroundColor: '#0000cc',
                    },
                }}
            >
                <Box display="flex" alignItems="center" gap={2}>
                    <HelpOutlineIcon fontSize="medium" />
                    <Typography component="span">Button</Typography>
                    <HelpOutlineIcon fontSize="medium" />
                </Box>
            </Button>



            <Button
                variant="contained"
                sx={{
                    backgroundColor: theme.palette.custom.netural[900],
                    color: '#fff',
                    borderRadius: '16px',
                    padding: '12px 16px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    '&:hover': {
                        backgroundColor: '#0000cc',
                    },
                }}
            >
                <Box display="flex" alignItems="center" gap={2}>
                    <HelpOutlineIcon fontSize="medium" />
                    <Typography component="span">Button</Typography>
                    <HelpOutlineIcon fontSize="medium" />
                </Box>
            </Button>
        </>
    );
};

export default Buttons;
