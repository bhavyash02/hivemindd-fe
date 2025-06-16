import React from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Avatar,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 510,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export interface ModalButton {
  label: string;
  variant: 'contained' | 'outlined';
  color?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

interface DynamicModalSmallButtonsProps {
  open: boolean;
  onClose: () => void;
  icon?: React.ReactNode;
  title: string;
  description: string;
  buttons: ModalButton[];
  reverseButtons?: boolean;
}

const DynamicModalSmallButtons: React.FC<DynamicModalSmallButtonsProps> = ({
  open,
  onClose,
  icon,
  title,
  description,
  buttons,
  reverseButtons = false
}) => {
  const orderedButtons = reverseButtons ? [...buttons].reverse() : buttons;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Avatar sx={{ bgcolor: 'rgba(0, 0, 255, 0.1)', color: 'blue' }}>
            {icon}
          </Avatar>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="h6" mt={2} fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>

        <Stack direction="row" spacing={2} mt={4} justifyContent="flex-end">
          {orderedButtons.map((btn, idx) => (
            <Button
              key={idx}
              variant={btn.variant}
              color={btn.color as any}
              onClick={btn.onClick}
              startIcon={btn.startIcon}
              endIcon={btn.endIcon}
              sx={{
                borderRadius: 2,
                backgroundColor:
                  btn.variant === 'contained' && btn.color === 'primary' ? '#0000FF' : undefined,
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

export default DynamicModalSmallButtons;
