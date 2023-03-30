import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Router from './Router/Router';

let theme = createTheme({
  palette: {
    primary: {
      main: '#332FD0',
    },
    secondary: {
      main: '#3F0071',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router/>
      
    </ThemeProvider>
  );
}

export default App;
