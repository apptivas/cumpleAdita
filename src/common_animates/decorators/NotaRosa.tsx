import "./nota_rosa.css";

export const NotaRosa = () =>{
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
          <div className="css-nota-rosa">
             <span className="nota">
                <i className="cabeza"></i>
                <i className="palo"></i>
                <i className="bandera"></i>
              </span>
                <i className="brillo"></i>
          </div>
    </div>
  )
}
