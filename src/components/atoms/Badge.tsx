import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
// import theme from '../../config/styles/theme';

export default function SimpleBadge() {
  return (
    // color="theme.palette?.custom"
    <Badge badgeContent={4} >
      <MailIcon color="action" />
    </Badge>
  );
}
