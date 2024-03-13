import LogInForm from './login-form';
import RegisterForm from './register-form';
import { useState } from 'react';
import recipleaseLogo from '../../assets/reciplease-logo.svg';
import { AuthButton } from './AuthButton';

function Auth() {
  const [selectedButton, setSelectedButton] = useState<'Log In' | 'Sign Up'>(
    'Log In'
  );

  function handleClick(buttonName: 'Log In' | 'Sign Up') {
    setSelectedButton(buttonName);
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <img
          src={recipleaseLogo}
          alt="Reciplease Logo"
          className="reciplease-logo"
        />
        <div className="toggle-btns">
          <AuthButton
            name="Log In"
            isActive={selectedButton === 'Log In'}
            onClick={() => handleClick('Log In')}
          />

          <AuthButton
            name="Sign Up"
            isActive={selectedButton === 'Sign Up'}
            onClick={() => handleClick('Sign Up')}
          />
        </div>
        {selectedButton === 'Log In' && <LogInForm />}
        {selectedButton === 'Sign Up' && <RegisterForm />}
      </div>
    </div>
  );
}

export default Auth;
