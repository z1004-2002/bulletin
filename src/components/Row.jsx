import React from 'react';

const Row = ({matiere,enseignant,moyenne,coef,rang,detail}) => {
    return (
        <tr>
            <td className='mat_ense'>
                <div className="mati">{matiere}</div>
                <div className="ensei">{enseignant}</div>
            </td>
            <td className='num'>{moyenne}</td>
            <td className='num'>{coef}</td>
            <td className='num'>{Math.round(moyenne*coef*100)/100}</td>
            <td className='num'>{rang}</td>
            <td className='det'>{detail}</td>
        </tr>
    );
};

export default Row;