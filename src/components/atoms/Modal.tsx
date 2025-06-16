import React from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Avatar,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface ModalButton {
  label: string;
  variant: 'contained' | 'outlined';
  onClick: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: string;
}

interface DynamicModalProps {
  open: boolean;
  onClose: () => void;
  avatarIcon: React.ReactNode;
  title: string;
  description: string;
  buttons: ModalButton[];
  reverseButtonOrder?: boolean;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const DynamicModal: React.FC<DynamicModalProps> = ({
  open,
  onClose,
  avatarIcon,
  title,
  description,
  buttons,
  reverseButtonOrder = false,
}) => {
  const buttonList = reverseButtonOrder ? [...buttons].reverse() : buttons;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {/* Top Row */}
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Avatar sx={{ bgcolor: 'rgba(0, 0, 255, 0.1)', color: '#555' }}>
            {avatarIcon}
          </Avatar>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Title and Description */}
        <Typography variant="h6" mt={2} fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          {description}
        </Typography>

        {/* Action Buttons */}
        <Stack spacing={2} mt={4}>
          {buttonList.map((btn, index) => (
            <Button
              key={index}
              variant={btn.variant}
              onClick={btn.onClick}
              startIcon={btn.startIcon}
              endIcon={btn.endIcon}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                backgroundColor: btn.variant === 'contained' ? btn.color ?? '#0000FF' : undefined,
                color: btn.variant === 'contained' ? '#fff' : undefined,
                '&:hover': btn.variant === 'contained'
                  ? { backgroundColor: btn.color ?? '#0000cc' }
                  : undefined,
              }}
            >
              {btn.label}
            </Button>
          ))}
        </Stack>

        
      </Box>
    </Modal>
  );
};

export default DynamicModal;
