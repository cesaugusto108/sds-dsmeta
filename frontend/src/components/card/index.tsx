import "./styles.css";
import axios from "axios";
import TableHeader from "../table-header";
import NotifyButton from "../notify-button";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Card() {
    const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));
	const [endDate, setEndDate] = useState(new Date());
    
	const [sales, setSales] = useState<Sale[]>([]);
    
	useEffect(() => {
        const start = startDate.toISOString().slice(0, 10);
        const end = endDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/sales?startDate=${start}&endDate=${end}`).then((response) => {
			setSales(response.data.content);
		});
	}, [startDate, endDate]);

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

	return (
		<div className="dsmeta-card">
			<h2>Vendas</h2>
			<div className="dsmeta-date-input-container">
				<DatePicker
					selected={startDate}
					onChange={(date: Date) => {
						setStartDate(date);
					}}
					className="dsmeta-date-input"
					dateFormat="dd/MM/yyyy"
					id="start_date"
				/>
				<DatePicker
					selected={endDate}
					onChange={(date: Date) => {
						setEndDate(date);
					}}
					className="dsmeta-date-input"
					dateFormat="dd/MM/yyyy"
					id="end_date"
				/>
			</div>
			<div className="dsmeta-salestable-container">
				<table className="dsmeta-salestable">
					<TableHeader />
					<tbody>{rows}</tbody>
				</table>
				<div className="dsmeta-salestable-container-bottom"></div>
			</div>
		</div>
	);
}

export default Card;
