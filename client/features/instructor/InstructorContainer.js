import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const debug  = require('debug')('instructor');

import Instructor from './Instructor';
import { fetchInstructor, fetchAllInstructors } from "./instructorActions";

class InstructorContainer extends Component{
	constructor( props ){
		super( props );
		// this.props.fetchInstructor();
		console.log("InstructorContainer props", props);
	}

	render(){
		return (
			<Instructor {...this.props} />
		);
	}
}


InstructorContainer.propTypes = {
	actions: PropTypes.object.isRequired,
	instructor: PropTypes.object,
	fetchInstructor: PropTypes.func,
	fetchAllInstructors: PropTypes.func,
};

const mapStateToProps = state => ({
	instructor: state.instructorReducer.fetchInstructor,
	allInstructors: state.instructorReducer.fetchAllInstructors
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ fetchInstructor, fetchAllInstructors }, dispatch)
});

export default connect( mapStateToProps, mapDispatchToProps )( InstructorContainer );
