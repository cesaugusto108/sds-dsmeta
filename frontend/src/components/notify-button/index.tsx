import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";

function NotifyButton() {
	return (
		<button className="table-notify-button">
			<img src={icon} alt="notify-btn-img" />
		</button>
	);
}

export default NotifyButton;
