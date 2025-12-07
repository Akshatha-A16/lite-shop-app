import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { add } from '../store';
import { getProducts } from '../api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then(res => setProducts(res.data)).finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography align="center" sx={{ mt: 4 }}>Loading…</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>Top Products</Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.slice(0, 12).map(p => (
          <Grid item xs={6} md={4} lg={3} key={p.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia component="img" height="180" image={p.image} alt={p.title} sx={{ objectFit: 'contain', p: 1 }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" noWrap>{p.title}</Typography>
                <Typography variant="h6" color="primary">₹{p.price}</Typography>
              </CardContent>
              <Button variant="contained" fullWidth startIcon={<Add />} onClick={() => dispatch(add(p))}>Add to Cart</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}