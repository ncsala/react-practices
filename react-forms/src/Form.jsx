import React from "react";

export function validate(entrada) {
  const error = {};

  if (!entrada.username) {
    error.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(entrada.username)) {
    error.username = "Username is invalid";
  }

  if (!entrada.password) {
    error.password = "Password is required";
  } else if (!/(?=.-*[0-9])/.test(entrada.password)) {
    error.password = "Password is invalid";
  }

  return error;
}

export default function Form() {
  const [entrada, setEntrada] = React.useState({ username: "", password: "" });
  const [error, setError] = React.useState({});

  const handleInputChange = (event) => {
    // [event.target.name] -> me permite manipular dos inputs distintos con la misma function
    // obitene el nombre del atritubo name del input que coincide con la propiedad
    // del objeto del estado
    setEntrada((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });

    let objError = validate({
      ...entrada,
      [event.target.name]: event.target.value,
    });
    setError(objError);
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          onChange={handleInputChange}
          name={"username"}
          type="text"
          value={entrada.username}
          className={error.username && "danger"}
        />
        {error.username && <p>{error.username}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          onChange={handleInputChange}
          name={"password"}
          type="password"
          value={entrada.password}
          className={error.password && "danger"}
        />
        {error.password && <p>{error.password}</p>}
      </div>
      <input type={"submit"} value={"Aceptar"}></input>
    </form>
  );
}
