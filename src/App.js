import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

function Todo(props) {
  return (
    <div className="style">
      <h2 className="squarestyle">{props.todo.Title}</h2>
    </div>
  );
}
function Todo1(props) {
  return (
    <div className="style">
      <h2 className="squarestyle">{props.todo1.contents}</h2>
    </div>
  );
}

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, Title: "송중기" },
    { id: 2, Title: "송강" },
  ]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [todos1, setTodos1] = useState([
    { id: 1, Contents: "송중기" },
    { id: 2, Contents: "송강" },
  ]);

  const addtodoHandler = () => {
    const newtodo = {
      id: todos.length + 1,
      Title: title,
    };
    setTodos([...todos, newTodos]);
  };
  const add1todoHandler = () => {
    const newtodo1 = {
      id: todos1.length + 1,
      Contents: contents,
    };
    setTodos([...todos1, newTodos1]);
  };

  return (
    <div>
      <input
        value={title}
        placeholder="제목을 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>Todo List</h2>
      <button color="green" onClick={add1todoHandler}>
        추가하기
      </button>
      {todos1.map((todo1) => {
        return <Todo1 todo={todo1} key={todo1.id}></Todo1>;
      })}
      <input
        value={contents}
        placeholder="내용를 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={(e) => setContents(e.target.value)}
      />
      <h2>Todo List</h2>
      <button color="green" onClick={addtodoHandler}>
        추가하기
      </button>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id}></Todo>;
      })}
    </div>
  );
};

export default App;
