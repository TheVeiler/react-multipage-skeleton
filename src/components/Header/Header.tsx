import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
	return (
		<header className="header">
			<nav className="navbar">
				<Link to="/" className="navlink">
					Home
				</Link>
				<Link to="/search" className="navlink">
					Search
				</Link>
				<Link to="/contact" className="navlink">
					Contact
				</Link>
			</nav>
		</header>
	)
}
