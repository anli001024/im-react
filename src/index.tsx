import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './models/main';
import {Provider} from 'mobx-react';
import stores from './store';
import './socket'

// 开启serive worker
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('./sw.js').then(
//             function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope)
//             },
//             function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err)
//             }
//         )
//     })
// }


const Entry = () => (
    <Provider {...stores}>
        <App />
    </Provider>
)

ReactDOM.render(<Entry />, document.getElementById('root') as HTMLElement);
