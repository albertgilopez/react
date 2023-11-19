export function Greeting() {
  function add(x, y) {
    return x + y;
  }

  const name = "Albert";
  const married = false;
  const user = {
    firstName: "Albert",
    lastName: "Gil",
  };

  if (married) {
    return <h1>Estoy casado</h1>;
  }

  // return <h1>{married ? "Estoy casado" : "No estoy casado 💎"} </h1>;

  //   return (
  //     <div>
  //       <h1>Este es un componente</h1>
  //       <p>El primer componente de {name}</p>
  //     </div>
  //   );

  // return <h1>{JSON.stringify(user)}</h1>
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h2>{user.lastName}</h2>
      <h3>{add(20, 9)}</h3>
    </div>
  );
}

export function UserCard({ name, amount, married, adress, greet }) {
  // console.log(props)
  // console.log(name, amount, married, adress, greet)
  return (
    <div>
      <h1>{name}</h1>
      <p>{amount} 💶</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>{adress.street}</li>
        <li>{adress.city}</li>
      </ul>
    </div>
  );
}

export function GreetingProp({ title, nameProp = "User" }) {
  //export function Greeting(props) {

  // console.log(props.title)
  // console.log(title, nameProp)

  return (
    <h1>
      {title}, {nameProp}
    </h1>
  );
}
