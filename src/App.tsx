import Pokemon from "./components/Pokemon";

const App = () => {
	return (
		<main className="main">
			<article className="container">
				<img
					src="./Ash and Pikachu.jpg"
					alt=""
					className="placeholder-image"
				/>
				<Pokemon />
			</article>
		</main>
	);
};

export default App;
