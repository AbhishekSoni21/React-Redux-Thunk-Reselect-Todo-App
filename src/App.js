import React from 'react';
import {hot} from 'react-hot-loader';
import TodoList from './todos/TodoList';
import styled from 'styled-components';

const AppContainer = styled.div`  margin:1rem;
font-family: Arial, Helvetica, san-serif;
color: #222222;`
const App = () =>(
    <AppContainer>
    {/* <h1>Hello world!!</h1> */}
    <TodoList/>
    </AppContainer>
)

export default hot(module)(App);