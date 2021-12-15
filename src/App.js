import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IncreaseCountButton from "./IncreaseCountButton";

function App() {
  const count = useSelector((currentState) => currentState);
  const dispatch = useDispatch();

  // function handleDecrease() {
  //   // store.dispatch({ type: "DECREASE_COUNT" });
  //   dispatch({ type: "DECREASE_COUNT" });
  // }
  useEffect(() => {
    let posts = [{ id: 3, content: "hello world", like: 1 }];
    // dispatch({ type: "SET_POSTS", payload: posts });
  }, []);

  return (
    <div className="App">
      {/* <h1>Current count: {count}</h1> */}
      <IncreaseCountButton />
      {/* <button onClick={handleDecrease}>-</button> */}
    </div>
  );
}

export default App;
