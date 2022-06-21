import React from "react";
import { useState, } from "react";

import "./index.css";

const menus_g = [ "Home", "Wave", "Gradation", "Raining", "Snowing", ];

const Menu = (props) => {

    const [ click, setClick ] = useState(false);

    return (
        <div className={`menu ${(click || props.light) ? "text-white":"text-dark"}`} onClick={(e)=>{e.stopPropagation()}}>
            {
                click && (
                    <div className="opened p-2">
                        <div className="tabs text-light">
                            {
                                menus_g.map((_, idx) => {
                                    if (props.page === _)
                                        return (
                                            <div key={idx} className="tab text-dim">
                                                {_}
                                            </div>
                                        );
                                    return (
                                        <div key={idx} className="tab" onClick={()=>{ window.location.href=`/${_.toLowerCase()}`; }}>
                                            {_}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                )
            }
            <div className="icon click" onClick={()=>{ setClick(!click); }}>
                <i className={`fa-solid fa-${click ? "xmark":"bars"} fa-2x`}/>
            </div>
        </div>
    );
}

export default Menu;
