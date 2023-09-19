import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1596181525841-8e8bae173eb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVtb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" />
            </div>
            </section>
        </header>
    )
}

export default Header;