const Scroll = (props) => {
	return(
		<div style={{overflox:'scroll', overflowY:'scroll', height:'300px', width: '100%'}}>
			{props.children}
		</div>
	);
}

export default Scroll;