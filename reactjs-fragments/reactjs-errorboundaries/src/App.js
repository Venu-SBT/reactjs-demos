import { useState } from "react";
import CustomGlossary from "./components/CustomGlossary";
import Glossary from "./components/Glossary";

const itemsArr = [
  { id: 1, term: "Monitor", description: "To watch movie"}, 
  { id: 2, term: "Guitar", description: "To play music"},
  { id: 3, term: "Car", description: "To travel to office"}
];

function App() {
  const [items, setItems] = useState(itemsArr);

  return (
    <div>
      <h1>App Component</h1>
      {/* <Glossary items={items}/> */}
      <CustomGlossary />

    </div>
  );
}

export default App;
