import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Hello() {
    return <div>
        <h1>Hello Dojo!</h1>
        <h2>Thigs I need to do:</h2>
        <li>nombre 1</li>
        <li>nombre 2</li>
        <li>nombre 3</li>
        </div> 

}

root.render( <div>
    <Hello/>
</div>
)
