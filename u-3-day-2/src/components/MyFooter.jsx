
import { Component } from "react"


class MyFooter extends Component {
    render() {
        return (
            <footer>
                <div className="d-flex justify-content-center bg-secondary">
                    <span className="px-2"><p>Privacy Policy</p></span>
                    <span className="px-2"><p>Contact</p></span>
                    <span className="px-2"><p>Terms & Conditions</p></span>
                </div>
            </footer>
        )
    }
}

export default MyFooter