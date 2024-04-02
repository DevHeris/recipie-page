import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <PreparationTime />
      <Ingredients />
      <Instructions />
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
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li> Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
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
        <Instruction
          description="Beat the eggs"
          explanation="In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
          You can add a tablespoon of water or milk for a fluffier texture."
        />
        <Instruction
          description="Heat the pan"
          explanation="Place a non-stick frying pan over medium heat and add butter or oil."
        />
        <Instruction
          description="Cook the omelette"
          explanation="Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
    the eggs evenly coat the surface."
        />
        <Instruction
          description="Add fillings (optional)"
          explanation="When the eggs begin to set at the edges but are still slightly runny in the 
        middle, sprinkle your chosen fillings over one half of the omelette."
        />
        <Instruction
          description="Fold and serve"
          explanation="As the omelette continues to cook, carefully lift one edge and fold it over the 
    fillings. Let it cook for another minute, then slide it onto a plate."
        />
        <Instruction
          description="Enjoy"
          explanation="Serve hot, with additional salt and pepper if needed."
        />
      </ul>
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

export default App;
