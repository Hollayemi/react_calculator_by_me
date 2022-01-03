import react from 'react'
import './Input.css'


const input = props =>{
    return(
        <div className="inputSide">
            <input type="text" value="0" className="myInput" readOnly/>
            <div className="operationDetails">
                <p className="myResult"></p>
                <p className="LastOperation"></p>
            </div>
        </div>
    )
}

export default input