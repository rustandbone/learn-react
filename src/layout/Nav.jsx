import { useAuth } from '@/contexts/Auth';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Nav() {
  const { isAuth, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/')
  }

  return (
    <nav>
      <ul className="flex gap-4 p-5 font-extralight">
        {
          !isAuth && (
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
            >
              Sign in
            </NavLink>
          </li>
          )
        }
        {/* <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            Sign up
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            Contact
          </NavLink>
        </li>
        {
          isAuth && (
            <button type="button" onClick={handleSignOut}
              className='py-0.5 px-2 border border-white/40 rounded-md hover:border-white'>
              Sign Out
            </button>
          )
        }
      </ul>
    </nav>
  );
}

export default Nav;