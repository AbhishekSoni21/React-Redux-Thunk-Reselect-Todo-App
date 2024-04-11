import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { markTodoAsCompleted, removeTodo } from "./action";
import { displayAlert, loadTodos, markTodoAsCompletedRequest, removeTodosRequest } from "./thunks";
import { getCompleteTodos, getIncompleteTodos, getTodos, getTodosLoading } from "./selector";
import styled from "styled-components";

const ListWrapper = styled.div`max-width: 700px;
margin: auto;`

const TodoList = ({
  completedTodos,
  incompleteTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    console.log('hi',startLoadingTodos().then(res=>console.log('res',res)))
  }, []);

  const loadingMessage = <div>Loading Todos...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
   {console.log('a',incompleteTodos)}
   {console.log('b',completedTodos)}
      <h3>Incomplete :</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed :</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
//   todos: getTodos(state),
completedTodos : getCompleteTodos(state),
incompleteTodos : getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodosRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
