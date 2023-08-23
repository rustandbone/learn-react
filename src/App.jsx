import { createBrowserRouter, RouterProvider, Link, NavLink } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import router from './routes';
import ThemeProvider from './contexts/Theme';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;