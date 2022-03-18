import {render} from 'react-dom';
import {store} from './Redux/Store/store'
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
render(<Provider store={store}><App/></Provider>,document.getElementById("root"));