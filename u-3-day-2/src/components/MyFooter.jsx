
import { Component } from "react"


class MyFooter extends Component {
    render() {
        return (
            <footer>
                <div className="d-flex justify-content-center bg-secondary">
                    <span class="px-2"><p>Privacy Policy</p></span>
                    <span class="px-2"><p>Contact</p></span>
                    <span class="px-2"><p>Terms & Conditions</p></span>
                </div>
            </footer>
        )
    }
}

export default MyFooter