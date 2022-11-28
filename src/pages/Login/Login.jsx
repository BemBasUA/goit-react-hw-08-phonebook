import { useDispatch } from 'react-redux';
import { login } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="ml-6" onSubmit={handleSubmit}>
      <label className="mr-2" htmlFor="">
        Email
        <input className="border rounded" type="email" name="email" />
      </label>
      <label className="mr-2" htmlFor="">
        Password
        <input className="border rounded" type="password" name="password" />
      </label>
      <button className=" bg-slate-500 rounded-lg px-4 " type="submit">
        Log In
      </button>
    </form>
  );
};
