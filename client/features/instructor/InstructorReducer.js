export default function instructorReducer( state = { instructor: {}, allInstructors: [] }, action ){
	switch (action.type) {
		case "FETCH_INSTRUCTOR":
			console.log('return', 'action.payload:', action.payload);
			return Object.assign( {}, state, {
				instructor: action.payload
			});
		case "FETCH_ALL_INSTRUCTORS":
			// console.log('return', 'action.payload:', action.payload);
			// making an array copy of action.payload : array of obj
			let arrInstructor = Object.assign( [], state.allInstructors, action.payload );
			console.log("arrInstructor", arrInstructor);

			return Object.assign( {}, state, {
				allInstructors: arrInstructor
			})

		default: return state;
	}
}
