import FormNavigation from './form-navigation';
import { useStore } from '../../zustand/store';
import UploadWidget from './upload-widget';

interface FormState {
  category: string;
  servings: number;
  duration: number;
  title: string;
  shortDescription: string;
  longDescription: string;
}

interface FormDetailsProps {
  state: FormState;
  setState: React.Dispatch<React.SetStateAction<FormState>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  setFormSection: (section: string) => void;
}

const FormDetails: React.FC<FormDetailsProps> = ({ state, setState, handleChange, setFormSection }) => {
  // Zustand
  const { updateActiveNavButton } = useStore();

  // RENDER:
  return (
    <div className="create-recipe-form">
      <form>
        <h2>What's on the menu, Chef?</h2>
        <FormNavigation setFormSection={setFormSection} formSection={''} />
        <div className="create-recipe-form-details">
          <div className="form-column">
            <UploadWidget state={state} setState={setState} />

            <select
              name="category"
              value={state?.category}
              onChange={handleChange}
            >
              <option value="Starters">Starter</option>
              <option value="Mains">Main</option>
              <option value="Sides">Side</option>
              <option value="Desserts">Dessert</option>
              <option value="Bakery">Bakery</option>
              <option value="Drinks">Drink</option>
            </select>

            <input
              name="servings"
              type="number"
              placeholder="Number of servings"
              min={1}
              value={state?.servings}
              onChange={handleChange}
              required
            />

            <input
              name="duration"
              type="number"
              placeholder="Duration (in minutes)"
              min={1}
              value={state?.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-column">
            <input
              name="title"
              type="text"
              placeholder="Recipe Title"
              maxLength={70}
              value={state?.title}
              onChange={handleChange}
              required
            />

            <input
              name="shortDescription"
              type="text"
              placeholder="Recipe Short Description"
              maxLength={70}
              value={state?.shortDescription}
              onChange={handleChange}
              required
            />

            <textarea
              name="longDescription"
              placeholder="Recipe Long Description"
              value={state?.longDescription}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() => {
                setFormSection('Ingredients');
                updateActiveNavButton(2);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormDetails;
