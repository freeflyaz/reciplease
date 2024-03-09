import React from 'react';
import FormNavigation from "./form-navigation";
import { useStore } from "../../zustand/store";

interface FormState {
  ingredients: string[];
}

interface FormIngredientsProps {
  state: FormState;
  setState: React.Dispatch<React.SetStateAction<FormState>>;
  setFormSection: (section: string) => void;
}

const FormIngredients: React.FC<FormIngredientsProps> = ({ state, setState, setFormSection }) => {
  // ZUSTAND:
  const { updateActiveNavButton } = useStore();

  // FUNCTIONS:
  // Update initial form state with ingredients
  const handleAddIngredient = () => {
    setState({ ...state, ingredients: [...state.ingredients, ""] });
  };

  // Track ingredients in the initial form state:
  const handleIngredientChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const ingredients = [...state.ingredients]; // Avoid mutating the initial array
    ingredients[index] = value;
    setState({ ...state, ingredients: ingredients });
  };

  // RENDER:
  return (
    <>
      <div className="create-recipe-form">
        <form>
          <h2>What are the ingredients, Chef?</h2>
          <FormNavigation setFormSection={setFormSection} formSection={''} />
          <div className="create-recipe-form-ingredients">
            {state.ingredients.map((ingredient, index) => (
              <input
                key={index}
                name="ingredients"
                type="text"
                placeholder="Add ingredient here"
                maxLength={100}
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
                required
              />
            ))}

            <button
              type="button"
              className="no-fill-btn"
              onClick={handleAddIngredient}
            >
              Add Another Ingredient
            </button>
            <button
              type="button"
              onClick={() => {
                setFormSection("Method");
                updateActiveNavButton(3);
              }}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormIngredients;
