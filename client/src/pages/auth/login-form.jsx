import { useState } from "react";
import { login } from "../../services/api-service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const initialLoginData = {
  email: "",
  password: "",
};

function LogInForm() {
  // STATES:
  const [loginData, setLoginData] = useState(initialLoginData);

  // VARIABLES:
  const navigate = useNavigate();

  // FUNCTIONS:
  // Update form's inputs' values:
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Error pop-up if user's details are incorrect:
  const handleError = (err) => toast.error(err, { position: "top-right" });

  // Success pop-up if user's details are accepted:
  const handleSuccess = (msg) => toast.success(msg, { position: "top-right" });

  // On submit, send details to the server:
  async function handleSubmit(e) {
    e.preventDefault();

    const res = await login(loginData);
    const { success, message, user } = res;

    if (success) {
      handleSuccess(
        `Welcome back Chef ${user.firstName}! Let's get cooking...`,
      );
      setLoginData({
        email: "",
        password: "",
      });
      setTimeout(() => navigate("/dashboard"), 2000);
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
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="on"
          value={loginData.password}
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
