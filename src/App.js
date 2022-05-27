import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Spinner from "./components/Spinner";

function App() {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getAdvice = () => {
    // setIsLoading(true);
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then(({ slip }) => {
        setAdvice(slip);
        setIsLoading(false);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <Card advice={advice} action={getAdvice} isLoading={isLoading} />
    </div>
  );
}

export default App;
