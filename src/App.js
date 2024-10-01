import Link from "./components/Link";
// import ButtonPage from "./pages/ButtonPage";
// import AccordionPage from "./components/Accordion";
// import DropdownPage from "./components/Accordion";

function App() {
  return (
    <div>
      <Link to={"/accordion"}>Go to Accordion</Link>
      <br></br>
      <Link to={"/dropdown"}>Go to Dropdown</Link>
    </div> 
  );
}
export default App;
