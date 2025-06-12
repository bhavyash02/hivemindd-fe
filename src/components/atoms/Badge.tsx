import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import theme from "../../config/styles/theme";

export default function SimpleBadge() {
  return (
    <>
    // Blue COLOR
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: theme.palette.custom.primaryBlue[500],
        borderRadius: "999px", // full pill shape
        padding: "6px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        height: "40px"
      }}
    >
      {/* Left Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.primaryBlue[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>

      {/* Text */}
      <Typography component="span" sx={{ fontWeight: 600 }}>
        Badge
      </Typography>

      {/* Right Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.primaryBlue[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: theme.palette.custom.primaryBlue[600],
        borderRadius: "999px", // full pill shape
        padding: "6px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        height: "40px"
      }}
    >
      {/* Left Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.primaryBlue[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>

      {/* Text */}
      <Typography component="span" sx={{ fontWeight: 600 }}>
        Badge
      </Typography>

      {/* Right Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.primaryBlue[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>

    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: theme.palette.custom.primaryBlue[300],
        borderRadius: "999px", // full pill shape
        padding: "6px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        height: "40px"
      }}
    >
      {/* Left Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.primaryBlue[200],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>

      {/* Text */}
      <Typography component="span" sx={{ fontWeight: 600 }}>
        Badge
      </Typography>

      {/* Right Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.primaryBlue[200],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>


    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: theme.palette.custom.netural[900],
        borderRadius: "999px", // full pill shape
        padding: "6px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        height: "40px"
      }}
    >
      {/* Left Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.netural[700],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>

      {/* Text */}
      <Typography component="span" sx={{ fontWeight: 600 }}>
        Badge
      </Typography>

      {/* Right Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.netural[700],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>


    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: theme.palette.custom.Green[500],
        borderRadius: "999px", // full pill shape
        padding: "6px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        height: "40px"
      }}
    >
      {/* Left Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.Green[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>

      {/* Text */}
      <Typography component="span" sx={{ fontWeight: 600 }}>
        Badge
      </Typography>

      {/* Right Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.Green[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>

    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: theme.palette.custom.red[500],
        borderRadius: "999px", // full pill shape
        padding: "6px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        height: "40px"
      }}
    >
      {/* Left Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.red[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>

      {/* Text */}
      <Typography component="span" sx={{ fontWeight: 600 }}>
        Badge
      </Typography>

      {/* Right Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.red[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>


    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: theme.palette.custom.yellow[500],
        borderRadius: "999px", // full pill shape
        padding: "6px 16px",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        height: "40px"
      }}
    >
      {/* Left Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.yellow[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>

      {/* Text */}
      <Typography component="span" sx={{ fontWeight: 600 }}>
        Badge
      </Typography>

      {/* Right Icon Container */}
      <Box
        sx={{
          backgroundColor: theme.palette.custom.yellow[300],
          borderRadius: "8px",
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>
    
    </>
  );
}
