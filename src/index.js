import React from 'react';
import ReactDOM from 'react-dom';

if(module.hot){
    module.hot.accept()
}

const App = (props) => {
    return(
        <div>
            <h1>Hello from inside React</h1>
        </div>
    )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)