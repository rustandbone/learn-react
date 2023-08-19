import { createBrowserRouter, RouterProvider, Link, NavLink } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import router from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;