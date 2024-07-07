import {
  useState,
  //useEffect
} from "react";


function AddTask(props) {
  const [inputs, setInputs] = useState({
    title: '',
    weight: 1,
    description: '',
    projectId: ''
  });


  const handleChange = (e) => {
        const newInputs = {
          ...inputs
        };
        if (e.target.name === "weight") newInputs[e.target.name] = parseInt(e.target.value)
        else newInputs[e.target.name] = e.target.value
        setInputs(newInputs)
  }

  return ( <
    form class = "task"
    id = "add-task"
    /*onSubmit = {...}*/ >
    <
    div className = "field" >
    <
    label > Task title: < /label> <
    input type = "text"
    name = "title"
    onChange = {
      handleChange
    }
    value = {
      inputs.title
    }
    required /
    >
    < /
    div > <
    div className = "field" >
    <
    label > Weight: < /label> <
    input type = "number"
    name = "weight"
    onChange = {
      handleChange
    }
    value = {
      inputs.weight
    }
    required /
    >
    < /
    div >
    <
    div className = "field" >
    <
    label > description: < /label> <
    textarea name = "description"
    onChange = {
      handleChange
    }
    value = {
      inputs.description
    }
    required /
    >
    < /
    div >
    <
    div className = "field" >
    <
    label > Project: < /label> <
    select name = "projectId"
    onChange = {
      handleChange
    }
    value = {
      inputs.projectId
    }
    required > < option value = ""
    selected = "selected"
    disabled = "disabled" > Select project < /option>  < /
    select > < /
    div >
    <
    button > + < /button> < /
    form >
  );
}

export default AddTask;
