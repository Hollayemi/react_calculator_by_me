import react from 'react'

import './Button.css'

import Numbers from './Numbers/Numbers'
import Operators from './Operators/Operators'
import Advance from './Advance/Advance'

const input = props =>{
    
    return(
        <div className="allButtons">
            <Numbers 
                btnFun={props.btnFunc_} 
                />
            <Operators 
                btnFun={props.btnFunc_} 
                />
            <Advance 
                btnFun={props.btnFunc_} 
                showStyle={props.openAdvStyle} 
                showAdvBtn={props.showAdvBtn} 
                />
        </div>
    )
}

export default input