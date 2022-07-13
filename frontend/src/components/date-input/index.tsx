import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function DateInput() {
	const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));
	const [endDate, setEndDate] = useState(new Date());

	return (
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
	);
}

export default DateInput;
