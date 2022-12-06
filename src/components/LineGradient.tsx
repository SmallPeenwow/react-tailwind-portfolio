type LineGradientProps = {
	width: string;
};

const LineGradient = ({ width }: LineGradientProps) => {
	return <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>;
};

export default LineGradient;
