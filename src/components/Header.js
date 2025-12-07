import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  const qty = useSelector(s => s.cart.items.reduce((a, b) => a + b.qty, 0));
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Lite-Shop</Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/cart" startIcon={<Badge badgeContent={qty} color="error"><ShoppingCartIcon sx={{ color: '#fff' }} /></Badge>}>Cart</Button>
      </Toolbar>
    </AppBar>
  );
}