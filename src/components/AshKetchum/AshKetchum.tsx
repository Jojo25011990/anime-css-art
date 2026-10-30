import Cheek from "./Cheek";
import Chin from "./Chin";
import Face from "./Face";
import Hair from "./Hair";
import Mouth from "./Mouth";

// type ConfigType = {
// 	position: string;
// 	bottom: string;
// 	width: string;
// 	height: string;
// };

type ConfigType = Record<string, string>;

const AshKetchum = () => {
	const ashStylesConfig: ConfigType = {
		position: "absolute",
		bottom: "0",
		width: "100%",
		height: "700px",
		// border: "1px solid red",
	};

	return (
		<div className="ash-ketchum" style={ashStylesConfig}>
			<Hair />
			<Mouth />
			<Cheek />
			<Cheek className="cheek-left" />
			<Chin />
			<Face />
		</div>
	);
};

export default AshKetchum;
