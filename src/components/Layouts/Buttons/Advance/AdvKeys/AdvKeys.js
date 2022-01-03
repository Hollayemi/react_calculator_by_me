import react from 'react'

import './AdvKeys.css'

const key = props =>(
    
        <div className="eachButton funcHorz">
            <button onClick={props.btnFunc} >{props.content}</button>
        </div>
    
)

export default key