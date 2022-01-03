import react from 'react'
import './Operators.css'

import Number from './Key/Key'


const operators = props =>(
    
        <section className="oprKeysSec">
            <div>
                <div className=" funcKeyHorz">
                    <Number content="<" btnFunc={()=>props.btnFun('<')}/>
                    <Number content="/" btnFunc={()=>props.btnFun('/')}/>
                    <Number content="X" btnFunc={()=>props.btnFun('*')}/>
                    <Number content="-" btnFunc={()=>props.btnFun('-')}/>
                    <Number content="+" btnFunc={()=>props.btnFun('+')}/>
                </div>
            </div>
        </section>
    
)

export default operators