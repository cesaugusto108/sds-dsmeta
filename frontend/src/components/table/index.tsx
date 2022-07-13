import "./styles.css";
import TableHeader from "../../components/table-header";
import TableBody from "../table-body";

function Table() {
	return (
		<div className="dsmeta-salestable-container">
			<table className="dsmeta-salestable">
				<TableHeader />
				<TableBody />
			</table>
		</div>
	);
}

export default Table;
