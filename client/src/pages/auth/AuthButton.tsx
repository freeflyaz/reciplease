interface AuthButtonProps {
  name: 'Log In' | 'Sign Up';
  isActive: boolean;
  onClick: () => void;
}

export function AuthButton({ name, isActive, onClick }: AuthButtonProps) {
  return (
    <button
      className={`btn-category ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
