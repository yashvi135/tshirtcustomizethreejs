import Navbar from "./component/Navbar";
import Tshirt3D from "./component/Tshirt";
import CustomizeTshirtSide from "./component/CustomizeTshirtSide";
import Canvas from './canvas';
import Customizer from "./component/Customizer";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="flex-1 flex">
        <Canvas/>
       <Customizer/>
       <CustomizeTshirtSide/>
      </div>
    </div>
  );
}

export default App;
