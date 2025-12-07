import { useSelector, useDispatch } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { remove, clear } from '../store';

export default function Cart() {
  const items = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((a, b) => a + b.price * b.qty, 0);

  if (items.length === 0) return <Typography align="center" sx={{ mt: 8 }}>Your cart is empty</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Shopping Cart ({items.length})</Typography>
      <Table>
        <TableHead>
          <TableRow><TableCell>Product</TableCell><TableCell align="right">Price</TableCell><TableCell align="right">Qty</TableCell><TableCell align="right">Subtotal</TableCell><TableCell /></TableRow>
        </TableHead>
        <TableBody>
          {items.map(i => (
            <TableRow key={i.id}>
              <TableCell>{i.title}</TableCell>
              <TableCell align="right">₹{i.price}</TableCell>
              <TableCell align="right">{i.qty}</TableCell>
              <TableCell align="right">₹{(i.price * i.qty).toFixed(2)}</TableCell>
              <TableCell><Button size="small" color="error" startIcon={<DeleteIcon />} onClick={() => dispatch(remove(i.id))}>Remove</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
        <Typography variant="h6">Total: ₹{total.toFixed(2)}</Typography>
        <Box>
          <Button variant="outlined" onClick={() => dispatch(clear())}>Clear Cart</Button>
          <Button variant="contained" sx={{ ml: 2 }} onClick={() => alert('Checkout mock – order placed!')}>Checkout</Button>
        </Box>
      </Box>
    </Box>
  );
}