import React from "react";

import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputvalue: string;
    id: number;
    checked: boolean;
  };
  return (
    <div className="App">
      <div>
        <h2>TODO</h2>
        <form onSubmit={() => {}}>
          <input type="text" onChange={() => {}} className="inputText" />
          <input type="submit" value="作成" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default App;
