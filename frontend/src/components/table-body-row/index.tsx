import "./styles.css";

function TableBodyRow() {
	return (
		<tr>
			<td className="table-id">#341</td>
			<td className="table-date">28/06/2022</td>
			<td className="table-salesperson">Anakin</td>
			<td className="table-visits">15</td>
			<td className="table-sales">11</td>
			<td className="table-total">R$ 55300.00</td>
			<td className="table-notify">
				<button className="table-notify-button">
					<img src="/assets/img/notification-icon.svg" alt="" srcSet=""></img>
				</button>
			</td>
		</tr>
	);
}

export default TableBodyRow;
