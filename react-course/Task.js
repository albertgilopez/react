import "./Task.css";

export function TaskCard({ ready }) {
  const cardStyles = { background: "#202020", color: "#FFF", padding: "20px" };
  const titleStyle = { fontWeight: "ligther" };

  return (
    // <div class="card" style={cardStyles}>
    // <div class="card">
    <div className="card">
      <h1 style={titleStyle}>Mi primera tarea</h1>

      {/* <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready === true ? "Tarea realizada" : "Tarea no realizada"}
      </span> */}

      <span className={ready ? "bg-green" : "bg-red"}>
        {ready === true ? "Tarea realizada" : "Tarea no realizada"}
      </span>
    </div>

    // <p>Tarea realizada</p>
  );
}
