import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer';
import TopicContainer from '../features/topic/TopicContainer';
import GradeContainer from '../features/grade/GradeContainer';
import StudentTopicContainer from '../features/studentTopicList/StudentTopicContainer';
import InstructorContainer from '../features/instructor/InstructorContainer';
import MentorTopic from '../features/mentorTopicList/MentorTopic';
import Signup from '../features/signup/Signup';
import Login from '../features/signup/Login';
import UploadPicture from '../features/signup/UploadPicture';
import ChangePicture from '../features/signup/ChangePicture';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Login}/>
		<Route path="/student" component={StudentContainer}/>
		<Route path="/mentor" component={MentorContainer}/>
		<Route path="/mentor/:mentorId" component={MentorTopic}/>
		<Route path="/grade" component={GradeContainer}/>
		<Route path="/topic" component={TopicContainer}/>
		<Route path="/signup" component={Signup}/>
		<Route path="/login" component={Login}/>
		<Route path="/upload-picture" component={UploadPicture}/>
		<Route path="/change-picture" component={ChangePicture}/>
		<Route path="/studentTopic" component={StudentTopicContainer}/>
		<Route path="/instructor" component={InstructorContainer}/>
	</Route>
);
