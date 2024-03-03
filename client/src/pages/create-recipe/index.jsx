import FormDetails from "./form-details";
import FormIngredients from "./form-ingredients";
import FormMethod from "./form-method";
import Navbar from "../../components/navbar";
import { useState } from "react";
import { createRecipe } from "../../services/api-service";
import { ToastContainer, toast } from "react-toastify";
import { useStore } from "../../zustand/store";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  shortDescription: "",
  longDescription: "",
  imageUrl: "",
  category: "Mains",
  servings: "",
  duration: "",
  ingredients: [],
  method: [],
};

function CreateRecipe() {
  // STATES:
  const [state, setState] = useState(initialState);
  const [formSection, setFormSection] = useState("Details");
  const { updateActiveNavButton } = useStore();
  const navigate = useNavigate();

  // FUNCTIONS:
  // Error pop-up if recipe errors::
  const handleError = (err) => toast.error(err, { position: "top-right" });

  // Success pop-up if recipe is created:
  const handleSuccess = (msg) => toast.success(msg, { position: "top-right" });

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

    const res = await createRecipe(state);
    const { success, message } = res;

    if (success) {
      handleSuccess("Recipe created! Redirecting to your dashboard...");
      setState({
        title: "",
        shortDescription: "",
        longDescription: "",
        imageUrl: "",
        category: "Mains",
        servings: "",
        duration: "",
        ingredients: [],
        method: [],
      });
      setFormSection("Details");
      updateActiveNavButton(1);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      handleError(message);
    }
  }

  // RENDER:
  return (
    <>
      <Navbar />
      {formSection === "Details" && (
        <FormDetails
          state={state}
          setState={setState}
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={true}
      />
    </>
  );
}

export default CreateRecipe;
