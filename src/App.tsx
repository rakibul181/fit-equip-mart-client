import Menu from "./components/header/Menu";
import Home from "./pages/home/Home";

  
 const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Menu/>
      <Home></Home>
      <h1>Fit equip  mart</h1>
    </div>
  );
 };
 
 export default App;