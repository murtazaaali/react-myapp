//import logo from './logo.svg';
//import './App.css';
import FC from "./Components/functionalcomp";
import { Classcomp, Classcomp1 } from "./Components/classcomp";
import Click from "./Components/click";
import Counter from "./Components/counter";
import Parentcomp from "./Components/Parentcomp";
import classprops from "./REACTPROPS/classprops";
function App() {
  return (
    <div>
      <h1>Exploration Pakistan</h1>
      <h1>The EP show</h1>
      <FC />
      <Classcomp />
      <Classcomp1 />
      <Click />
      <Counter />
      <Parentcomp />
    </div>
  );
}

export default App;
