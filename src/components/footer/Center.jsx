import React, { useState,useEffect } from 'react';

const Center = ({notes}) => {
    const [coef, setCoef] = useState(0)
    const [points,setPoints] = useState(0)
    const [moyen,setMoyen] = useState(0)

    useEffect(()=>{
        let c = 0;
        let p = 0;
        for (let i = 0; i < notes.premier.length; i++) {
            c+=notes.premier[i].cf
            p+= Math.round(notes.premier[i].cf*notes.premier[i].moy*100)/100
        }
        for (let i = 0; i < notes.deuxieme.length; i++) {
            c+=notes.deuxieme[i].cf
            p+= Math.round(notes.deuxieme[i].cf*notes.deuxieme[i].moy*100)/100
        }
        for (let i = 0; i < notes.humain.length; i++) {
            c+=notes.humain[i].cf
            p+= Math.round(notes.humain[i].cf*notes.humain[i].moy*100)/100
        }
        setCoef(c)
        setPoints(p)
        setMoyen(Math.round(100*p/c)/100)
    },[])

    return (
        <div className='center'>
            <div className="top">
                <table border="1" className='pt_co'>
                    <tr>
                        <td>Points</td>
                        <td>Coefs</td>
                    </tr>
                    <tr>
                        <td>{points}</td>
                        <td>{coef}</td>
                    </tr>
                </table>
                <table border="1" className='moy_rg'>
                    <tr>
                        <td>Moyenne</td>
                        <td>Rang</td>
                    </tr>
                    <tr>
                        <td>{moyen}</td>
                        <td>16e</td>
                    </tr>
                </table>
                <table border="1" className='min_max'>
                    <tr>
                        <td>M.Cla</td>
                        <td>Min</td>
                        <td>Max</td>
                    </tr>
                    <tr>
                        <td>{notes.m_classe}</td>
                        <td>{notes.min}</td>
                        <td>{notes.max}</td>
                    </tr>
                </table>
            </div>
            <div className="bottom">
                <div className="moy_sco">
                    MOYENNE SCOLAIRE: <div className='m'>12.1</div>
                </div>
                <div className="amg">
                    Appréciation MG <div className="span_amg">ASSEZ BIEN</div>
                </div>
                <div className="ams">
                Appréciation MS <div className="span_ams">ASSEZ BIEN</div>
                </div>
            </div>
        </div>
    );
};

export default Center;