
import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import scifiBooksArray from "../data/scifi.json"

class LatestRelease extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="col-12 text-center "><h1>Sci-Fi Books</h1></div>
                    {scifiBooksArray.slice(0, 12).map(book => (

                        < Col key={book.asin} sm={6} md={4} lg={3} className="mb-3 d-flex" >
                            <Card  >
                                <Card.Img variant="top" src={book.img} style={{ height: "350px", width: "auto" }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Button variant="success">€{book.price}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}


                </Row>
            </Container >

        )
    }
}

export default LatestRelease