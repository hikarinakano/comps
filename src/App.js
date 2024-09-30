
// import ButtonPage from "./pages/ButtonPage";
// import AccordionPage from "./components/Accordion";
import { useState } from "react";
import Dropdown from "./components/Dropdown"; 

function App() {
  const [value, setValue] = useState(null);

  const handleSelect = (option) => {
    setValue(option);
  }
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Blue', value: 'blue'},
    {label: 'Green', value: 'green'},
  ]

  return (
    <Dropdown options={options} value={value} onChange={handleSelect} />
  );
}
export default App;
