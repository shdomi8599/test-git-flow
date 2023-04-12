import { useRecoilState } from "recoil";
import "./App.css";
import { numState } from "./atom";

function App() {
  const [num, setNum] = useRecoilState(numState);
  const up = () => {
    setNum(num + 1);
  };
  const down = () => {
    setNum(num - 1);
  };
  return (
    <div className="main">
      <span className="cal" onClick={down}>
        -
      </span>
      <span className="num">{num}</span>
      <span className="cal" onClick={up}>
        +
      </span>
    </div>
  );
}

export default App;
