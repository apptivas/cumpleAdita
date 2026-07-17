import "./globo.css";

export const Globes = () =>{
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
    <div  className="balloon" style={{scale:0.5}} />
    <div className="balloon green"style={{scale:0.5}}/>
    <div className="balloon blue"style={{scale:0.5}}/>
    <div className="balloon yellow"style={{scale:0.5}}/>
      <div className="balloon purple" style={{scale:0.5}}/>
    </div>
  )
}
