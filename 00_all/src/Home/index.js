import React from "react";
import "./index.css";

const Home = (props) => {
    return (
        <div className="home">
            <div className="box">
                {
                    [ "Wave", "Gradation", ].map((_, idx) => {
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
