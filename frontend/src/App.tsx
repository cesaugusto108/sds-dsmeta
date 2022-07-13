import Card from "./components/card";
import Header from "./components/header";
import "./index.css";


function App() {
	return (
		<>
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
