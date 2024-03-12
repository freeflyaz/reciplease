import React from 'react';
import { useStore } from '../../zustand/store';

interface FormNavigationProps {
  setFormSection: (formSection: string) => void;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ setFormSection }) => {
  // ZUSTAND:
  const activeNavButton = useStore((state) => state.activeNavButton);
  const { updateActiveNavButton } = useStore();

  // RENDER:
  return (
    <div className='form-nav-container'>
      <div className='form-nav'>
        <button
          className={`form-nav-btn ${activeNavButton === 1 ? 'active-nav-btn' : ''}`}
          onClick={() => {
            setFormSection('Details');
            updateActiveNavButton(1);
          }}
        >
          1
        </button>
        <p>Details</p>
      </div>
      <div className='form-nav'>
        <button
          className={`form-nav-btn ${activeNavButton === 2 ? 'active-nav-btn' : ''}`}
          onClick={() => {
            setFormSection('Ingredients');
            updateActiveNavButton(2);
          }}
        >
          2
        </button>
        <p>Ingredients</p>
      </div>
      <div className='form-nav'>
        <button
          className={`form-nav-btn ${activeNavButton === 3 ? 'active-nav-btn' : ''}`}
          onClick={() => {
            setFormSection('Method');
            updateActiveNavButton(3);
          }}
        >
          3
        </button>
        <p>Method</p>
      </div>
    </div>
  );
};

export default FormNavigation;
