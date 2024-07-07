// Task list

import {
  useState,
} from "react";
import TaskDetails from './TaskDetails';
import { graphql } from 'react-apollo';
import { getTasksQuery } from '../queries/queries';

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  function displayTasks() {
    const data = props.data;
    if (data.loading) {
      return (<div>Loading tasks...</div>);
    } else {
      return data.tasks.map(task => {
        return (
          <li
            key={task.id}
            onClick={(e) => {
              setState({
                selected: task.id
              });
            }}
          >
            {task.title}
          </li>
        );
      })
    }
  }

  return (
    <div>
      <ul id="task-list">{displayTasks()}</ul>
      <TaskDetails taskId={state.selected} />
    </div>
  );
}

export default graphql(getTasksQuery)(TaskList);;
