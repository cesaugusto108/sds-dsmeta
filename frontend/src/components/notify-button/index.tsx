import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
	id: number;
};

function sendNotification(id: number) {
	axios(`${BASE_URL}/sales/${id}/notification`).then((response) => toast.info("SMS sent succesfully"));
}

function NotifyButton({ id }: Props) {
	return (
		<button className="table-notify-button" onClick={() => sendNotification(id)}>
			<img src={icon} alt="notify-btn-img" />
		</button>
	);
}

export default NotifyButton;
