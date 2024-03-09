import React, { useState, ChangeEvent, FormEvent } from 'react';
import { register } from "../../services/api-service";
import { ToastContainer, toast } from "react-toastify";

interface RegisterDetails {
  firstName: string;
  email: string;
  password: string;
}

const initialRegisterDetails = {
  firstName: "",
  email: "",
  password: "",
};

function RegisterForm(): JSX.Element {
  // STATES:
  const [registerDetails, setRegisterDetails] = useState(
    initialRegisterDetails,
  );

  // FUNCTIONS:
  // Update form's inputs' values:
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setRegisterDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Error pop-up if user's details are incorrect or already used:
  const handleError = (err: string) => toast.error(err, { position: "top-right" });

  // Success pop-up if user's details are accepted:
  const handleSuccess = (msg: string) => toast.success(msg, { position: "top-right" });

  // Reset form:
  function resetForm(): void {
    setRegisterDetails(initialRegisterDetails);
  }

  // On submit, send details to the server:
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { firstName, email, password } = registerDetails;
    const user = { firstName, email, password };
    try {
      const res = await register(user);
      const { success, message } = res;

      if (success) {
        handleSuccess(`Welcome Chef ${firstName}! Please log in.`);
        resetForm();
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError('An error occurred.');
    }
  }

  // RENDER:
  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={registerDetails.firstName}
          onChange={handleChange}
          required
          
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={registerDetails.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="on"
          value={registerDetails.password}
          onChange={handleChange}
          required
        />
        <button>Sign Up</button>
      </form>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={true}
      />
    </>
  );
}

export default RegisterForm;
