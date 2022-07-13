import "./styles.css";
import TableHeader from "../../components/table-header";

function Table() {
	return (
		<div className="dsmeta-salestable-container">
			<table className="dsmeta-salestable">
                <TableHeader />
            </table>
		</div>
	);
}

export default Table;
