import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="ml-6" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="mr-2" htmlFor="">
          Username
          <input className="border rounded" type="text" name="name" />
        </label>
        <label className="mr-2" htmlFor="">
          Email
          <input className="border rounded" type="email" name="email" />
        </label>
        <label className="mr-2" htmlFor="">
          Password
          <input className="border rounded" type="password" name="password" />
        </label>
      </div>
      <button className="block bg-slate-500 rounded-lg px-4 " type="submit">
        Register
      </button>
    </form>
  );
};
