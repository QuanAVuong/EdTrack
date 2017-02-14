import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes/routes';
import configureStore from './store/configureStore';
import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {fetchStudent} from './features/student/studentActions';
import { fetchTopics } from './features/topic/TopicAction';
import {fetchGrade, fetchAllGrades} from './features/grade/gradeActions';
import {fetchStudentTopic} from './features/studentTopicList/StudentTopicActions';
import { fetchInstructor, fetchAllInstructors } from './features/instructor/instructorActions';



const store = configureStore();

store.dispatch(fetchStudent());
store.dispatch(fetchTopics());
// store.dispatch(fetchGrade());
store.dispatch(fetchAllGrades());
store.dispatch(fetchStudentTopic(1));
store.dispatch(fetchInstructor());
store.dispatch(fetchAllInstructors());


render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);
