import react from 'react'

import './Layout.css'
import Buttons from './Buttons/Buttons'


const input = props =>(
    
        <div className="myDownSec">
            <Buttons 
                
                btnFunc_={props.btnFunc0__} 
                btnFuncDot_={props.btnFuncDot__} 
                btnFuncEql_={props.btnFuncEql__} 

               
                btnFuncClr_={props.btnFuncClr__} 
                btnFuncDiv_={props.btnFuncDiv__} 
                btnFuncMul_={props.btnFuncMul__} 
                btnFuncSub_={props.btnFuncSub__} 
                btnFuncAdd_={props.btnFuncAdd__} 
                
                />
        </div>
    
)

export default input