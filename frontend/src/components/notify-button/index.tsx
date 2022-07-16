import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
	id: number;
};

function sendNotification(id: number) {
	axios(`${BASE_URL}/sales/${id}/notification`).then((response) => console.log("Ok"));
}

function NotifyButton({ id }: Props) {
	return (
		<button className="table-notify-button" onClick={() => sendNotification(id)}>
			<img src={icon} alt="notify-btn-img" />
		</button>
	);
}

export default NotifyButton;
