import {
  createTodo,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  markTodoAsCompleted,
  removeTodo,
} from "./action";

export const displayAlert = (text) => () => {
  alert(`${text}`);
};

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
    return todos;
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const addTodosRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const removeTodosRequest = (id) => async (dispatch, getState) => {
  try {
    //  const body = JSON.stringify({text});
    const response = await fetch("http://localhost:8080/todos/" + id, {
      method: "delete",
    });
    const todo = await response.json();
    dispatch(removeTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const markTodoAsCompletedRequest = id =>async (dispatch)=>{
    try {
        //  const body = JSON.stringify({text});
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
          method: "post",
        });
        const updatedTodo = await response.json();
        dispatch(markTodoAsCompleted(updatedTodo));
      } catch (error) {
        dispatch(displayAlert(error));
      }
}