import { useState } from "react";
import { login } from "../../services/api-service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};

function LogInForm() {
  // STATES:
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  // FUNCTIONS:
  function handleChange(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleError = (err) => toast.error(err, { position: "top-right" });

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = state;
    const user = { email, password };
    const res = await login(user);
    const { success, message } = res;

    if (success) {
      navigate("/dashboard");
    } else {
      handleError(message);
    }
  }

  // RENDER:
  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="on"
          value={state.password}
          onChange={handleChange}
          required
        />
        <button>Log In</button>
      </form>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={true}
      />
    </>
  );
}

export default LogInForm;
