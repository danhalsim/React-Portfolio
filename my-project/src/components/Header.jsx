import { Link } from 'react-router-dom';
// import glResume from '../../public/assets/gluciano-resume.pdf';

function Header () {
    return (
        <nav className="flex nav fluid rounded">
			<div>
				<Link key={1} className="navbar" to="/">
					Home
				</Link>
			</div>
			<div>
				<Link key={2} className="navbar" to="/about">
					About
				</Link>
			</div>
			<div>
				<Link key={3} className="navbar" to="/portfolio">
					Portfolio
				</Link>
			</div>
			<div>
				<Link key={4} className="navbar" to="/contact">
					Contact
				</Link>
			</div>
			<div>
				<a href={glResume} download="test">
					<button className="resume-btn navbar">
						Resume
					</button>
				</a>
			</div>
		</nav>
    )
};

export default Header;