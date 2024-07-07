// Import ApolloClient from 'apollo-boost';

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AddProject from './components/AddProject';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div id = "main">
        <div id = "bg"></div> 
        <h1 > Holberton school tasks </h1> 
        <TaskList/>
        <AddProject/>
        <AddTask/>
      </div>
    </ApolloProvider>
  );
}

export default App;
