const Scroll = (props) => {
	return(
		<div style={{overflox:'scroll', overflowY:'scroll', height:'300px', width: '600px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;