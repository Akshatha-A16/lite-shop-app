import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Switch, FormControlLabel, Box } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import { light, dark } from './theme';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { createTheme } from '@mui/material/styles';
function App() {
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('lite-dark') || 'false'));
  useEffect(() => localStorage.setItem('lite-dark', JSON.stringify(darkMode)), [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? createTheme({ palette: { mode: 'dark' } }) : createTheme({ palette: { mode: 'light' } })}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <FormControlLabel control={<Switch checked={darkMode} onChange={() => setDarkMode(d => !d)} />} label="Dark" sx={{ position: 'absolute', top: 16, right: 16 }} />
          <Header />
          <Box sx={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;