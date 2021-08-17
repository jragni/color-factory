import { useParams } from "react-router-dom";

function Color() {
  const { color } = useParams();

  return (
    <div className="Color" style={{ backgroundColor: color }}>
      <h1> {color} </h1>
    </div>
  );
}

export default Color;

