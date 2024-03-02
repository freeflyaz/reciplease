import FormNavigation from "./form-navigation";
import { useStore } from "../../zustand/store";

function FormDetails({ state, handleChange, setFormSection }) {
  const { updateActiveNavButton } = useStore();

  return (
    <>
      <div className="create-recipe-container details">
        <form>
          <p>What's on the menu, Chef?</p>
          <FormNavigation setFormSection={setFormSection} />
          <div className="create-recipe-form">
            <div className="form-column 1">
              <input
                name="imageUrl"
                type="text"
                placeholder="Image URL"
                value={state.imageUrl}
                onChange={handleChange}
                required
              />

              <select
                name="category"
                value={state.category}
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
                value={state.servings}
                onChange={handleChange}
                required
              />

              <input
                name="duration"
                type="number"
                placeholder="Duration (in minutes)"
                value={state.duration}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-column 2">
              <input
                name="title"
                type="text"
                placeholder="Recipe Title"
                maxLength={70}
                value={state.title}
                onChange={handleChange}
                required
              />

              <input
                name="shortDescription"
                type="text"
                placeholder="Recipe Short Description"
                maxLength={70}
                value={state.shortDescription}
                onChange={handleChange}
                required
              />

              <textarea
                name="longDescription"
                placeholder="Recipe Long Description"
                value={state.longDescription}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() => {
                  setFormSection("Ingredients");
                  updateActiveNavButton(2);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormDetails;
