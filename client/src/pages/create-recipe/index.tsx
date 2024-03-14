import FormDetails from './form-details';
import FormIngredients from './form-ingredients';
import FormMethod from './form-method';
import Navbar from '../../components/navbar';
import { useState } from 'react';
import { createRecipe } from '../../services/api-service';
import { ToastContainer, toast } from 'react-toastify';
import { useStore } from '../../zustand/store';
import { useNavigate } from 'react-router-dom';

interface RecipeState {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  servings: number;
  duration: number;
  ingredients: string[];
  method: string[];
}

const initialState: RecipeState = {
  title: '',
  shortDescription: '',
  longDescription: '',
  imageUrl: '',
  category: 'Mains',
  servings: 0,
  duration: 0,
  ingredients: [''],
  method: ['']
};

const CreateRecipe: React.FC = () => {
  // STATES:
  const [state, setState] = useState<RecipeState>(initialState);
  const [formSection, setFormSection] = useState('Details');

  // ZUSTAND:
  const { updateActiveNavButton } = useStore();
  const userID = useStore((state) => state.userID);

  // VARIABLES:
  const navigate = useNavigate();

  // FUNCTIONS:
  // Error pop-up if recipe errors:
  const handleError = (err: string) =>
    toast.error(err, { position: 'top-right' });

  // Success pop-up if recipe is created:
  const handleSuccess = (msg: string) =>
    toast.success(msg, { position: 'top-right' });

  // Update form's inputs' values:
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  // Reset form:
  function resetFormState() {
    setState(initialState);
  }

  // Submit form to server:
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await createRecipe(state, userID);
    const { success, message } = res;

    if (success) {
      handleSuccess('Recipe created! Redirecting to your dashboard...');
      resetFormState();
      setFormSection('Details');
      updateActiveNavButton(1);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      handleError(`${message}. Please make sure all fields are filled in.`);
    }
  }

  // RENDER:
  return (
    <div className="create-recipe-container">
      <Navbar />
      {formSection === 'Details' && (
        <FormDetails
          state={state}
          setState={setState}
          handleChange={handleChange}
          setFormSection={setFormSection}
        />
      )}
      {formSection === 'Ingredients' && (
        <FormIngredients
          state={state}
          setState={setState}
          setFormSection={setFormSection}
        />
      )}
      {formSection === 'Method' && (
        <FormMethod
          state={state}
          setState={setState}
          setFormSection={setFormSection}
          handleSubmit={handleSubmit}
        />
      )}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default CreateRecipe;
