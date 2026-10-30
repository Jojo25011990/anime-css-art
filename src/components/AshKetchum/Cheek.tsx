type CheekProps = {
	className?: string;
};

const Cheek = ({ className = "" }: CheekProps) => {
	return (
		<div className={`cheek ${className}`}>
			<div className="cheek-part01"></div>
			<div className="cheek-part02"></div>
			<div className="cheek-part03"></div>
		</div>
	);
};

export default Cheek;
