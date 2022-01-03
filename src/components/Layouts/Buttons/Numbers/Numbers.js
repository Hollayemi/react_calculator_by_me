import react from 'react'
import './Numbers.css'

import Number from './Number/Number'


const input = props =>(
    
        <section className="numberSecBtn">
            <div className="numberDivBtn">
                <div className="numbRow">
                    <Number number="7" btnFunc={()=>props.btnFun(7)}/>
                    <Number number="8" btnFunc={()=>props.btnFun(8)}/>
                    <Number number="9" btnFunc={()=>props.btnFun(9)}/>
                </div>

                <div className="numbRow">
                    <Number number="4" btnFunc={()=>props.btnFun(4)}/>
                    <Number number="5" btnFunc={()=>props.btnFun(5)}/>
                    <Number number="6" btnFunc={()=>props.btnFun(6)}/>
                </div>

                <div className="numbRow">
                    <Number number="1" btnFunc={()=>props.btnFun(1)}/>
                    <Number number="2" btnFunc={()=>props.btnFun(2)}/>
                    <Number number="3" btnFunc={()=>props.btnFun(3)}/>
                </div>

                <div className="numbRow">
                    <Number number="." btnFunc={()=>props.btnFun('.')}/>
                    <Number number="0" btnFunc={()=>props.btnFun(0)}/>
                    <Number number="=" btnFunc={()=>props.btnFun('=')}/>
                </div>
            </div>
        </section>
    
)

export default input