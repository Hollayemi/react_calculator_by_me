import react from 'react'

import './Number.css'

const input = props =>(
    
        <div className="eachButton">
            <button onClick={props.btnFunc} >{props.number}</button>
        </div>
    
)

export default input