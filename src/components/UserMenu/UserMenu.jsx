import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectEmail } from 'redux/selectors';

export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());
  return (
    <div className="ml-auto">
      <p>{email}</p>
      <button
        className=" bg-slate-500 rounded-lg px-4 "
        type="button"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};
