import Link from "./components/Link";
import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div className="">
      <Link to={"/accordion"}>Go to Accordion</Link>
      <br></br>
      <Link to={"/dropdown"}>Go to Dropdown</Link>
      <br></br>
      <Link to={"/button"}>Go to Button</Link>
      <br></br>
      <div className="">
        <Route path="/accordion">
          <AccordionPage/>
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div> 
  );
}
export default App;
