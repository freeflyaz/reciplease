import FormNavigation from "./form-navigation";

function FormMethod({ state, setState, setFormSection, handleSubmit }) {
  const handleAddStep = () => {
    setState({ ...state, method: [...state.method, ""] });
  };

  const handleStepChange = (event, index) => {
    const { value } = event.target;
    const method = state.method;
    method[index] = value;
    setState({ ...state, method: method });
  };

  return (
    <>
      <div className="create-recipe-container method">
        <form onSubmit={handleSubmit}>
          <p>How do you make it, Chef?</p>
          <FormNavigation setFormSection={setFormSection} />
          <div className="create-recipe-form">
            <div className="method">
              {state.method.map((step, index) => (
                <textarea
                  key={index}
                  type="text"
                  name="method"
                  placeholder="Add step here"
                  value={step}
                  onChange={(event) => handleStepChange(event, index)}
                  required
                />
              ))}

              <button
                type="button"
                className="no-fill-btn"
                onClick={handleAddStep}
              >
                Add a Step
              </button>
              <button type="submit">Submit Recipe</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormMethod;
