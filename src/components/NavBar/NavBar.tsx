import { Link } from "react-router-dom";

export function NavBar() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/pokelist">PokeList</Link>
        </div>
    )
}