import { RouterProvider } from 'react-router-dom';
import router from './routes';
import ThemeProvider from './contexts/Theme';
import AuthProvider from './contexts/Auth';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
            <div className="App">
              <RouterProvider router={router} />
            </div>
        </AuthProvider>
      </ThemeProvider>
      <Toaster /> 
    </>
  );
}

export default App;