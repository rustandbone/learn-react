import { RouterProvider } from 'react-router-dom';
import router from './routes';
import ThemeProvider from './contexts/Theme';
import AuthProvider from './contexts/Auth';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
              <div className="App">
                <RouterProvider router={router} />
              </div>
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
      <Toaster /> 
    </>
  );
}

export default App;