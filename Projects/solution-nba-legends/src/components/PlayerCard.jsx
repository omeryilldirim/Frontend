import Card from 'react-bootstrap/Card';


const PlayerCard = ({name, img, statistics}) => {
    // const {name,img,statistics} = props
  return (
    <Card >
      <Card.Img variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  )
}

export default PlayerCard