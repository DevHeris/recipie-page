import "./App.css";
import instructions from "./instructions";
import ingredients from "./ingredients";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="assets/images/image-omelette.jpeg" alt="omelette" />
    </header>
  );
}

function Intro() {
  return (
    <section className="intro">
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </section>
  );
}

function PreparationTime() {
  return (
    <section className="time">
      <h4>Preparation time</h4>
      <ul>
        <li>
          <span>Total</span>: Approximately 10 minutes
        </li>
        <li>
          <span>Preparation</span>: 5 minutes
        </li>
        <li>
          <span>Cooking</span>: 5 minutes
        </li>
      </ul>
    </section>
  );
}

function Ingredients() {
  return (
    <section className="ingredients">
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(({ ingredient }) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      <hr />
    </section>
  );
}

function Instructions() {
  return (
    <section className="instructions-section">
      <h3>Instructions</h3>
      <ul className="instructions">
        {instructions.map(({ description, explanation }) => {
          return (
            <Instruction
              description={description}
              explanation={explanation}
              key={description}
            />
          );
        })}
      </ul>
      <hr />
    </section>
  );
}

function Instruction({ description, explanation }) {
  return (
    <li className="instruction">
      <span className="description">{description}</span>: {explanation}
    </li>
  );
}

function Nutrition() {
  return (
    <section className="nutrition">
      <h3>Nutrition</h3>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <ul>
        <Nutrient text="Calories" value="277kcal" />
        <Nutrient text="Carbs" value="0g" />
        <Nutrient text="Protein" value="20g" />
        <Nutrient text="Fat" value="22g" />
      </ul>
    </section>
  );
}

function Nutrient({ text, value }) {
  return (
    <>
      <li>
        <span className="text">{text}</span>
        <span className="value">{value}</span>
      </li>
      <hr />
    </>
  );
}

export default App;
