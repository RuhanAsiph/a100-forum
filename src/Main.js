import Scroll from "./Scroll.js";
import { useState } from "react";
import React from 'react';

function Main(){
	const [yourName, setYourname] = useState("lovely");
	var name;
	function storeName(event) {
		name = event.target.value;
		event.preventDefault();	
	};
	function setName(event) {
		setYourname(name);
	};
	
	return(
		<div className="container">
			<div className="form">
				<input type="text" onChange={storeName} placeholder="creepy pharma"/> 
				<button onClick={setName} className="button-initials">Register Your Initials</button> <br />
				<label>What bothers you lovely {yourName}</label> <br />
				<textarea className="big-textfield" rows="23" cols="30" placeholder="let it all out, pharma cares for you" /> <br />
				<button className="purple-button" type="submit">Don't be scared my love</button>
			</div>
			<div className="recents">
				<p>They makes us feel as if we don't matter, but you do really matter :)</p>
				<Scroll>
			  	  <p>
				  </p>
				</Scroll>
				

			</div>
			
		</div>
		
	);
}


export default Main;