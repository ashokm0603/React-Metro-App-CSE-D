import { Link } from "react-router-dom";
import "../assets/navStylings.css";
const NavBar = () => {
    return (
        <div>
            <nav>
                <ol>
                    <li>   <Link to="/home"> Home</Link>   </li>
                    <li>   <Link to="/about">About </Link>   </li>
                    <li>   <Link to="/products">Products </Link>   </li>
                    <li>   <Link to="/cart"> Cart</Link>   </li>
                    <li>   <Link to="/contact">Contact</Link>   </li>
                    <li>   <Link to="/login"> Login</Link>   </li>
                </ol>
            </nav>
        </div>
    )
}
export default NavBar;