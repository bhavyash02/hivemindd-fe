import * as React from 'react';
import {
  Pagination,
  PaginationItem,
  Stack,
  Box,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import theme from '../../config/styles/theme';

interface CustomPaginationProps {
  count: number;
  disabledPages?: number[];
}

export default function CustomPagination({
  count,
  disabledPages = [],
}: CustomPaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        shape="rounded"
        renderItem={(item) => {
          const isArrow = item.type === 'previous' || item.type === 'next';
          const isDisabled = disabledPages.includes(item.page ?? -1);
          const isSelected = item.selected;

          return (
            <PaginationItem
              {...item}
              disabled={isDisabled}
              sx={{
                ...(isArrow
                  ? {
                    px: 1,
                    gap: '4px',
                    height: '32px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--neutral-900-main, #111)',
                    fontFamily: 'var(--Font, Inter)',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    '& .MuiSvgIcon-root': {
                      width: '20px',
                      height: '20px',
                    },
                  }
                  : {
                    width: '33px',
                    minWidth: '33px',
                    height: '32px',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontFamily: 'var(--Font, Inter)',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: isDisabled
                      ? '#D0D0D0'
                      : isSelected
                        ? theme.palette.primary.main // active = blue
                        : theme.palette.custom.netural[900], // inactive = black
                    backgroundColor: isSelected
                      ? 'var(--Primary-Blue-50, #E7E6FE)'
                      : 'transparent',
                  }),
              }}
              slots={{
                previous: () => (
                  <Box display="flex" alignItems="center" gap="4px">
                    <ArrowBackIosNewIcon fontSize="inherit" />
                    <Typography
                      sx={{
                        color: 'var(--neutral-900-main, #111)',
                        // fontFamily: 'var(--Font, Inter)',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        textAlign: 'justify',
                      }}
                    >
                    </Typography>
                  </Box>
                ),
                next: () => (
                  <Box display="flex" alignItems="center" gap="4px">
                    <Typography
                      sx={{
                        color: 'var(--neutral-900-main, #111)',
                        // fontFamily: 'var(--Font, Inter)',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        textAlign: 'justify',
                      }}
                    >
                    </Typography>
                    <ArrowForwardIosIcon fontSize="inherit" />
                  </Box>
                ),
              }}
            />
          );
        }}
      />
    </Stack>
  );
}
