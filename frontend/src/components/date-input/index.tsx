import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput() {
    return (
		<div className="dsmeta-date-input-container">
			<DatePicker selected={new Date()} onChange={(date: Date) => {}} className="dsmeta-date-input" dateFormat="dd/MM/yyyy" id="start_date" />
			<DatePicker selected={new Date()} onChange={(date: Date) => {}} className="dsmeta-date-input" dateFormat="dd/MM/yyyy" id="end_date" />
		</div>
	);
}

export default DateInput;