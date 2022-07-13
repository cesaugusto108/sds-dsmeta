import "./styles.css";
import Date from "../../components/date";
import Table from "../table";

function Card() {
	return (
		<div className="dsmeta-card">
			<h2>Vendas</h2>
            <Date />
            <Table />
		</div>
	);
}

export default Card;
