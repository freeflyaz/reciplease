import React from 'react';
import FormNavigation from './form-navigation';
import { FormState } from './form-details';

interface FormMethodProps {
  state: FormState;
  setState: React.Dispatch<React.SetStateAction<FormState>>;
  formSection: string;
  setFormSection: (section: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormMethod: React.FC<FormMethodProps> = ({
  state,
  setState,
  setFormSection,
  handleSubmit,
}) => {
  // FUNCTIONS:
  // Update initial form state with steps
  const handleAddStep = () => {
    setState({ ...state, method: [...state.method, ''] });
  };

  // Track steps in the initial form state:
  const handleStepChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = event.target;
    const method = [...state.method];
    method[index] = value;
    setState({ ...state, method: method });
  };

  // RENDER:
  return (
    <div className='create-recipe-form'>
      <form onSubmit={handleSubmit}>
        <h2>How do you make it, Chef?</h2>
        <FormNavigation setFormSection={setFormSection} />
        <div className='create-recipe-form-method'>
          {state.method.map((step, index) => (
            <textarea
              key={index}
              name='method'
              placeholder='Add step here'
              value={step}
              onChange={(event) => handleStepChange(event, index)}
              required
            />
          ))}

          <button type='button' className='no-fill-btn' onClick={handleAddStep}>
            Add Another Step
          </button>
          <button type='submit'>Submit Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default FormMethod;
