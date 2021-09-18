import Scroll from "./Scroll.js"


function Main(){
	return(
		<div className="container">
			
			<div className="form">
				
				<input type="text" placeholder="creepy pharma" /> 
				<button className="button-initials">Register Your Initials</button> <br />
				<label>What bothers you lovely</label> <br />
				<textarea className="big-textfield" rows="23" cols="30" placeholder="let it all out, pharma cares for you" /> <br />
				<button className="purple-button" type="submit">Don't be scared my love</button>
			</div>
			<div className="recents">
				<p>They makes us feel as if we don't matter, but you do really matter :)</p>
				
				<Scroll>
				
				<p>
				 leo eget bibendum. Morbi varius tincidunt magna, eu eleifend turpis lobortis quis. Vivamus nibh risus, gravida quis nulla sed, vulputate finibus purus. Suspendisse potenti. Sed efficitur risus mattis pulvinar malesuada.
				</p>

				</Scroll>
				

			</div>
			
		</div>
	);
}


export default Main;