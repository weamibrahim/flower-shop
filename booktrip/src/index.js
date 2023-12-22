/* This code is using React and ReactDOM to render the `<App />` component to the DOM. */
import ReactDom from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';


let root = ReactDom.createRoot(
    document.getElementById('root')
)

root.render(
    <App />
  

)

