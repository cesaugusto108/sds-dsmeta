import axios from "axios";
import { useEffect, useState } from "react";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotifyButton from "../notify-button";
import "./styles.css";

function TableBody() {
	const [sales, setSales] = useState<Sale[]>([]);

	useEffect(() => {
		axios.get(`${BASE_URL}/sales`).then((response) => {
			setSales(response.data.content);
		});
	}, []);

	const rows = sales.map((sale) => {
		return (
			<tr key={sale.id}>
				<td className="table-id">{sale.id}</td>
				<td className="table-date">{new Date(sale.date).toLocaleDateString()}</td>
				<td className="table-salesperson">{sale.salespersonName}</td>
				<td className="table-visits">{sale.visits}</td>
				<td className="table-sales">{sale.deals}</td>
				<td className="table-total">{sale.total.toFixed(2)}</td>
				<td className="table-notify">
					<NotifyButton />
				</td>
			</tr>
		);
	});

	return <tbody>{rows}</tbody>;
}

export default TableBody;
