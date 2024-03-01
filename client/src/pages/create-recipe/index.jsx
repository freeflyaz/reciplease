import FormDetails from "./form-details";
import FormIngredients from "./form-ingredients";
import FormMethod from "./form-method";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { createRecipe } from "../../services/api-service";

const initialState = {
  title: "",
  shortDescription: "",
  longDescription: "",
  imageUrl: "",
  category: "Mains",
  servings: 0,
  duration: 0,
  ingredients: [],
  method: [],
};

function CreateRecipe() {
  // STATES:
  const [state, setState] = useState(initialState);
  const [formSection, setFormSection] = useState("Details");

  // FUNCTIONS:
  // Update form's inputs' values:
  function handleChange(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await createRecipe(state);

    setState({
      title: "",
      shortDescription: "",
      longDescription: "",
      imageUrl: "",
      category: "Mains",
      servings: 0,
      duration: 0,
      ingredients: [],
      method: [],
    });
  }

  // RENDER:
  return (
    <>
      <Navbar />
      {formSection === "Details" && (
        <FormDetails
          state={state}
          handleChange={handleChange}
          setFormSection={setFormSection}
        />
      )}
      {formSection === "Ingredients" && (
        <FormIngredients
          state={state}
          setState={setState}
          handleChange={handleChange}
          setFormSection={setFormSection}
        />
      )}
      {formSection === "Method" && (
        <FormMethod
          state={state}
          setState={setState}
          handleChange={handleChange}
          setFormSection={setFormSection}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default CreateRecipe;
