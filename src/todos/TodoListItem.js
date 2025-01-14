import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const CompletedButton = styled(Button)`

  background-color: #22ee22;
`;

const RemovedButton = styled(Button)`
 
  background-color: #ee2222;
  margin-left: 8px;
`;

const Button = styled.button` font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
display: inline-block;`

  const TodoItemContainerWithWarning = styled(TodoItemContainer)`border-bottom : ${props=>(new Date(props.createdAt)>  new Date()?'none':'2px solid red')};`

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning
    return (
  <Container createdAt={todo.createdAt}>
    <h3>{todo.text}</h3>
    <p>Created at:&nbsp;{(new Date(todo.createdAt)).toLocaleDateString()}</p>
    <ButtonContainer>
      {todo.isCompleted ? null : (
        <CompletedButton
          className="completed-button"
          onClick={() => onCompletedPressed(todo.id)}
        >
          Mark As Completed
        </CompletedButton>
      )}
      <RemovedButton
        className="remove-button"
        onClick={() => onRemovePressed(todo.id)}
      >
        Remove
      </RemovedButton>
    </ButtonContainer>
  </Container>
)};

export default TodoListItem;
