import React from "react";
import "./index.css";

const menus_g = [ "Wave", "Gradation", "Raining", "Snowing", ];

const Home = (props) => {
    return (
        <div className="home">
            <div className="box">
                {
                    menus_g.map((_, idx) => {
                        return (
                            <span key={idx} className="tab click" onClick={()=>{ window.location.href=`/${_.toLowerCase()}`; }}>
                                <strong>
                                    { _ }
                                </strong>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
