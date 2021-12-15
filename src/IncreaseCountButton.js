import { useDispatch } from "react-redux";

export default function IncreaseCountButton() {
  const dispatch = useDispatch();
  function handleIncrease() {
    // store.dispatch({ type: "INCREASE_COUNT" });
    dispatch({ type: "INCREASE_COUNT", payload: 3 });
  }

  return <button onClick={handleIncrease}>+</button>;
}
