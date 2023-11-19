import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, GreetingProp, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product"; // importación por defecto
import { Button } from "./Button";
import { TaskCard } from "./Task";
// import { Hello } from "./Hello";

import { Posts } from "./Posts";
import { func } from "prop-types";

const root = ReactDOM.createRoot(document.getElementById("root"));

const HandleChange = (e) => {
  console.log(e.target.value);
  console.log("Escribiendo...");
};

const HandleClick = (e) => {
  console.log(e.target.value);
  console.log("Doble Click...");
};

// https://robohash.org/

const user = [
  {
    id: 1,
    name: "Albert ",
    image: "https://robohash.org/user",
  },
  {
    id: 2,
    name: "Bernat",
    image: "https://robohash.org/user2",
  },
];

// https://legacy.reactjs.org/docs/hooks-intro.html

function Counter() {
  const [counter, setCounter] = useState(0); // estado

  useEffect(function(){
    console.log("render")
  }, [counter]);

  return (

    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}

root.render(
  // Para evitar concatenar div dentro de div

  <>
    <Counter />

    {/* { Greeting () }
    { Greeting () }
    { Greeting () }
    { Greeting () } */}

    {/* <Greeting></Greeting>
    <Greeting></Greeting>
    <Greeting></Greeting>
    <Greeting></Greeting> */}

    <GreetingProp title="Hola" nameProp="Albert" />

    {/* <UserCard
      name="Albert"
      amount={3000}
      married={true}
      points={[1, 2, 3]}
      adress={{ street: "Barcelona", city: "Barcelona" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <UserCard
      name="Bernat"
      amount={5000}
      married={false}
      points={[1, 2, 3]}
      adress={{ street: "Barcelona", city: "Barcelona" }}
      greet={function () {
        alert("Hello");
      }}
    /> */}

    <Button text="Pagar" />
    <Button text="Cuenta" name="Albert" />
    <Button text="Opciones" />

    {/* <input id ="input" onChange={ function(e){
      console.log(e.target.value)
      console.log("Ecribiendo...")
    }}>
    </input> */}

    <input id="input" onChange={HandleChange} />
    <input id="input" onDoubleClick={HandleClick} />

    <form
      onSubmit={(e) => {
        e.preventDefault(); // prevenir comportamiento por defecto
        console.log("Enviado");
        alert("Se ha enviado el formulario");
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Enviar</button>
    </form>

    <TaskCard ready={true} />
    {/* 
    <Hello /> */}

    <Posts />

    {/* {user.map(user => {
      return <h1 key={user.id}>{user.name}</h1>
    })} */}

    {/* {user.map((user, i) => {
      return <h1 key={i}>{user.name}</h1>;
    })} */}
    {user.map((user, i) => {
      return (
        <div key={i}>
          {" "}
          {/* key tiene que estar en el primer elemento */}
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
