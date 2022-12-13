import React from "react";
import {ReservationContainer, ReservationForm, ReservationFormHolder, ReservationButton , ReservationImg} from "./TableElement"


function Table(){
   return (
    <ReservationContainer>

		<ReservationForm>
		    <h1>book a table</h1>
			<center><h3>~ check out your place ~ </h3></center>

			<form>
				<ReservationFormHolder>
					<div>
						<select>
							<option>1 people</option>
							<option>2 people</option>
							<option>3 people</option>
							<option>4 people</option>
						</select>

						<input type="text" name="" placeholder="Time"/>
						<input type="text" name="" placeholder="Phone"/>
					</div>

					<div>
						<input type="text" name="" placeholder="Date"/>
						<input type="text" name="" placeholder="Name"/>
						<input type="email" name="" placeholder="email"/>
					</div>
				</ReservationFormHolder>
                <ReservationButton>Book Now</ReservationButton>
			</form>
		</ReservationForm>
		<ReservationImg><div></div></ReservationImg>
	</ReservationContainer>
   )
}

export default Table;