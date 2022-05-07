const mascota = (props) => {
  return React.createElement("Div", {}, [
    React.createElement("h1", {}, props.nombre),
    React.createElement("h2", {}, props.color),
    React.createElement("h2", {}, props.sexo),
  ]);
};

const app = () => {
  return React.createElement("Div", {}, [
    React.createElement("h1", {}, "Mis perros"),
    React.createElement(mascota, {
      nombre: "Tommy",
      color: "Blanco-Negro",
      sexo: "Macho",
    }),
    React.createElement(mascota, {
      nombre: "Francesca",
      color: "Blanco-Negro",
      sexo: "Hembra",
    }),
  ]);
};

ReactDOM.render(React.createElement(app), document.getElementById("root"));
