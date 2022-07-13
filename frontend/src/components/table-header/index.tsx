import "./styles.css";

function TableHeader() {
    return (
		<thead>
			<tr>
				<th className="table-id">Id</th>
				<th className="table-date">Data</th>
				<th className="table-salesperson">Vendedor</th>
				<th className="table-visits">Visitas</th>
				<th className="table-sales">Vendas</th>
				<th className="table-total">Total</th>
				<th className="table-notify">Notificar</th>
			</tr>
		</thead>
	);
}

export default TableHeader;
