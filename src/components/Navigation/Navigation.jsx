import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="flex items-center mb-20 px-10 py-3 border-b-2">
      <Link className="mr-4" to={'/'}>
        Home
      </Link>
      {!isLoggedIn ? (
        <>
          <Link className="mr-4" to={'register'}>
            Register
          </Link>
          <Link to={'login'}>Login</Link>
        </>
      ) : (
        <>
          <Link to={'contacts'}>Contacts</Link>
          <UserMenu />
        </>
      )}
    </div>
  );
};
