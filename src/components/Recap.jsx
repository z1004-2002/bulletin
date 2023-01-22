import React, { useEffect, useState } from 'react';

const Recap = ({note,type}) => {
    const [point,setPoint] = useState(0)
    const [coef,setCoef] = useState(0)
    const [moyen,setMoyen] = useState(0)
    useEffect(()=>{
        let c = 0;
        let p = 0;
        for (let i = 0; i < note.length; i++) {
            c+=note[i].cf
            p+= Math.round(note[i].cf*note[i].moy*100)/100
        }
        setCoef(c)
        setPoint(p)
        setMoyen(Math.round(100*p/c)/100)
    },[])


    return (
        <tr className='rec' >
            <td colSpan="6">
                <div className="recap">
                    <div className="a">{type}</div>
                    <div className="b">
                        <span>Points: <span className="points">{point}</span></span>
                    </div>
                    <div className="c">
                        <span>Coefs : <span className="coef">{coef}</span> </span>
                    </div>
                    <div className="d">
                        <span>Moyenne : <span className="moy">{moyen}</span></span>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default Recap;