import { useParams } from 'react-router-dom';

function Color() {
  const { color } = useParams();

  return (
    <div className="Color" style={{ backgroundColor: color }}>

    </div>
  )
}

export default Color