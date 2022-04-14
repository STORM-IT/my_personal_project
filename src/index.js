import {render} from 'react-dom';
import {store} from './Redux/Store/store'
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom';
render(<Router><Provider store={store}><App/></Provider></Router>,document.getElementById("root"));