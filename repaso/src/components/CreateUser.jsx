import React from "react";

import {createUser} from '../actions'
import {connect} from 'react-redux'

export function CreateUser({create}) {

  const [input, setInput] = React.useState({
    name: "",
    lastName: "",
    age: "",
    city: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Aca usamos el connect
  const handleSubmit = (e) => {
    e.preventDefault();
    create(input);
    setInput({name:'', lastName:'',age:'', city:''})
  }

  // ACA USO use dispatch, MUCHO MAS FACIL
  // const dispatch = React.useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(createUser(input)) // {type: 'CREATE_USER', payload: input}
  //   setInput({name:'', lastName:'',age:'', city:''})
  // }

  return (
    <>
      <div>CREATE USER</div>

      <br></br>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type={"text"}
            name={"name"}
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Lastname</label>
          <input
            type={"text"}
            name={"lastName"}
            value={input.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type={"text"}
            name={"age"}
            value={input.age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type={"text"}
            name={"city"}
            value={input.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />

        <input type={"submit"} value={"CREATE"} />
      </form>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    create: (input) => dispatch(createUser(input))
  }
}


export default connect(null,mapDispatchToProps)(CreateUser)
// <CreateUser createUser={(input) => dispatch(createUser(input))}