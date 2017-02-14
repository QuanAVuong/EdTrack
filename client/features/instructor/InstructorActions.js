import axios from "axios";

const fetchInstructor = () => {
	const request = axios.get("/api/instructor/1");
	return dispatch => {
		request.then( instructor => {
			console.log("/api/instructor/1", instructor);
			dispatch({ type: "FETCH_INSTRUCTOR", payload: instructor.data });
		});
	};
};

const fetchAllInstructors = () => {
	const request = axios.get("/api/instructor");
	return dispatch => {
		request.then( allInstructors => {
			console.log('/api/instructor', allInstructors);
			dispatch({ type: "FETCH_ALL_INSTRUCTORS", payload: allInstructors.data });
		});
	};
};

export {
	fetchInstructor,
	fetchAllInstructors
};
