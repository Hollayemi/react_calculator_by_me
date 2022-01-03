import react from 'react'
import './Advance.css'

import Number from './AdvKeys/AdvKeys'


const input = props =>(
    
        <section className={props.showStyle + " advBnSec"}>
            <button onClick={props.showAdvBtn} className="displayArrow">{"<"}</button>
            <div className="numberDivBtn advKeyDiv">
                <div className="numbRow">
                    <Number content="sin" btnFunc={()=>props.btnFun('sin')}/>
                    <Number content="cos" btnFunc={()=>props.btnFun('cos')}/>
                </div>

                <div className="numbRow">
                    <Number content="tan" btnFunc={()=>props.btnFun('tan')}/>
                    <Number content="^" btnFunc={()=>props.btnFun('^')}/>
                </div>

                <div className="numbRow">
                    <Number content="(" btnFunc={()=>props.btnFun('(')}/>
                    <Number content=")" btnFunc={()=>props.btnFun(')')}/>
                </div>

                <div className="numbRow">
                    <Number content="abs" btnFunc={()=>props.btnFun('abs')}/>
                    <Number content="%" btnFunc={()=>props.btnFun('$')}/>
                </div>

                <div className="numbRow">
                    <Number content="sqrt" btnFunc={()=>props.btnFun('~')}/>
                    <Number content="pi" btnFunc={()=>props.btnFun('$')}/>
                </div>
            </div>
        </section>
    
)

export default input