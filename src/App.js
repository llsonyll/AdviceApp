import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getAdvice = () => {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then(({ slip }) => {
        setAdvice(slip);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <Card advice={advice} action={getAdvice} isLoading={isLoading} />
      <a
        className="author"
        href="https://github.com/llsonyll"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        By: Josep Rojas{" "}
      </a>
    </div>
  );
}

export default App;
