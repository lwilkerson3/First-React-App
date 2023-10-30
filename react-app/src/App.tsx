import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Holy guacamole!</strong> The button worked!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Press Me!</Button>
    </div>
  );
}

export default App;
