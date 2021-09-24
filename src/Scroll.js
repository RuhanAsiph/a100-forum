const Scroll = (props) => {
	return(
		<div style={{overflox:'scroll', overflowY:'scroll', height:'90%', width: '100%', border:'3px solid black'}}>
			{props.children}
		</div>
	);
}

export default Scroll;