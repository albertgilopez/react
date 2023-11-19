import PropTypes, { func } from "prop-types";
// https://www.npmjs.com/package/prop-types

export function Button({ text, name = "Usuario" }) {
  console.log(text);
  if (!text) {
    console.log("El texto no puede estar vacío");
  }
  return (
    <button onClick={function () {
      console.log("Hello")
    }}>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
