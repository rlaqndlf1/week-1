import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

let number = 3;

function User({ user, deleteUserHandler, onEditHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{user.title}</h2>
        <div>{user.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => {
            deleteUserHandler(user.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            onEditHandler(user.id);
          }}
        >
          {user.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [user, setUser] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (user.title.trim() === "" || user.body.trim() === "") return;
    setUsers([...users, { ...user, id: number }]);
    setUser(initialState);
    number++;
  };

  const deleteUserHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  const onEditHandler = (id) => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, isDone: !user.isDone };
      } else {
        return { ...user };
      }
    });
    setUsers(newUsers);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form onSubmit={onSubmitHandler} className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            value={user.title}
            onChange={onChangeHandler}
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            name="body"
            value={user.body}
            onChange={onChangeHandler}
          />
        </div>
        <button className="add-button">추가하기</button>
      </form>
      <div className="list-container">
        <h2 className="list-title">Working.. 🔥</h2>
        <div className="list-wrapper">
          {users.map((user) => {
            if (!user.isDone) {
              return (
                <User
                  user={user}
                  key={user.id}
                  setUsers={setUsers}
                  onEditHandler={onEditHandler}
                  deleteUserHandler={deleteUserHandler}
                ></User>
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div className="list-wrapper">
          {users.map((user) => {
            if (user.isDone) {
              return (
                <User
                  user={user}
                  key={user.id}
                  setUsers={setUsers}
                  onEditHandler={onEditHandler}
                  deleteUserHandler={deleteUserHandler}
                ></User>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
