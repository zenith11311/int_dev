import React, {useRef, useEffect, useState,} from "react";
import Canvas from "./Components/Canvas";

import "./index.css";

const sounds = [
    { name: 'Aspart',   file: 'asphalt.mp3' },
    { name: 'Gravel',   file: 'gravel_path.mp3' },
    { name: 'Mountain', file: 'mountain_pathway.mp3' },
    { name: 'Pavers',   file: 'pavers.mp3' },
    { name: 'Eaves',    file: 'under_eaves.mp3' },
]; // from 무료소리창고(https://pgtd.tistory.com/109)

const App = () => {
    const audioRef = useRef(null);

    const [ click, setClick ] = useState(false);
    const [ sound, setSound ] = useState(sounds[0].file);
    const [ extend, setExtend ] = useState(false);

    useEffect(()=>{
        audioRef.current.volume = 0.07; 
    }, []);

    return (
        <div 
            className="App"
            onClick={()=>{
                if (click)
                    audioRef.current.pause();
                else
                    audioRef.current.play();
                setClick(!click);
            }}>
            <Canvas/>
            <div className="MusicBox" onClick={(e)=>{ e.stopPropagation(); }}>
                {
                    (extend) && (
                        <div style={{ display:"inline-block" }}>
                            {
                                sounds.map((_, idx) => {
                                    return (
                                        <strong key={idx} 
                                            className="click"
                                            style={{ 
                                                padding: "5px",
                                                marginRight: "10px" ,
                                                color: (_.file === sound) ? "rgba(0, 100, 255, 0.9)" : "unset",
                                            }} 
                                            onClick={()=>{
                                                setSound(_.file); 
                                                audioRef.current.play();
                                            }}>
                                            { _.name }
                                        </strong>
                                    );
                                })
                            }
                        </div>
                    )
                }
                <div className="px-5 click" style={{ display:"inline-block" }} onClick={()=>{ setExtend(!extend); }}>
                    <i className={`fa-solid fa-chevron-${extend ? "right" : "left"} fa-lg`}/>
                </div>
                <audio
                    autoPlay
                    preload="true"
                    ref={audioRef}
                    style={{display:"none",}}
                    src={`/resources/${sound}`}/>
            </div>
        </div>
    );
};

export default App;
