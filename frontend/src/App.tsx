import Card from "./components/card";
import Header from "./components/header";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
	return (
		<>
            <ToastContainer />
			<Header />
			<main>
				<section id="dsmeta-main-section">
                    <div className="dsmeta-container">
                        <Card />
                    </div>
                </section>
			</main>
		</>
	);
}

export default App;
