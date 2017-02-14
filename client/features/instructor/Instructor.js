import React, { PropTypes } from "react";

const Instructor = props => {
	console.log("Instructor prop: ", props.instructor);
	// let instructor = props.instructor;
	console.log("All Instructors prop: ", props.allInstructor);
	return (
		<div>
			<h1>Instructor View</h1>
			{ !props.instructor ?
					<p>Loading Instructor...</p> :
					<div>
						<h3>Hello, Instructor {props.instructor.name}</h3>
					</div>
			}
			{ !props.allInstructor ?
					<p>Loading All Instructors...</p> :
					<div>
						<h3>Instructor List:</h3>
						<ul>

						</ul>
					</div>
			}

		</div>
	);
};

Instructor.propTypes = {
	instructor: PropTypes.object,
	allInstructor: PropTypes.object,
};

export default Instructor;
