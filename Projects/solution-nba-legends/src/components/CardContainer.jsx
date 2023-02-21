import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {data} from "../helpers/data"
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <Container className="card-container rounded-4 my-4 p-3">
        <Row>
            {data.map((player, index)=> (
                <Col key={index}>
                    <PlayerCard {...player}/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default CardContainer