import { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap"

class Welcome extends Component {
    render() {
        return (
            <Container>
                <Jumbotron className="bg-dark text-light jumbotron">
                    <h1>{this.props.title}</h1>
                    <p>
                        If you don't like to read, you haven't found the right book.
                    </p>
                </Jumbotron>
            </Container>
        )
    }
}

export default Welcome