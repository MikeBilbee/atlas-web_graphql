/*import ApolloClient from 'apollo-boost';
/*
...
*/
// components
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AddProject from './components/AddProject';
// apollo client setup
/*
...
*/
function App() {
  return ( <
    div id = "main" >
    <
    div id = "bg" > < /div> <
    h1 > Holberton school tasks < /h1> <
    TaskList / >
    <
    AddProject / >
    <
    AddTask / >
    <
    /div>
  );
}

export default App;
