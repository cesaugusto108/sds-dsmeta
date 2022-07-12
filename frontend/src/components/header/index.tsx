import icon from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
	return (
		<header>
			<div className="dsmeta-logo-container">
				<img src={icon} alt="logo-img" />
				<h1>DSMeta</h1>
				<p>
					Desenvolvido por{" "}
					<a href="https://github.com/cesaugusto108" target="_blank" rel="noopener noreferrer">
						<i className="bi bi-github"></i> cesaugusto108
					</a>
				</p>
			</div>
		</header>
	);
}

export default Header;
