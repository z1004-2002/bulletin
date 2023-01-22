import React from 'react';
import Row from './Row';
import Recap from './Recap';

const Tableau = ({ notes }) => {
    return (
        <table className='table' border='1'>
            <thead>
                <th className='u'>MATIERES/Enseignants</th>
                <th className='v'>Moy.</th>
                <th className='w'>Cf.</th>
                <th className='x'>Total</th>
                <th className='y'>Rg.</th>
                <th className='z'>Détails des notes</th>
            </thead>
            <tbody>
                {notes.premier.map((prem, idx) => <Row
                    key={idx}
                    matiere={prem.matiere}
                    enseignant={prem.enseignant}
                    moyenne={prem.moy}
                    coef={prem.cf}
                    rang={prem.Rg}
                    detail={prem.details}
                />)}
                <Recap
                    type={"MATIERES DU GROUPE I"}
                    note={notes.premier}
                />
                {notes.deuxieme.map((deu, idx) => <Row
                    key={idx}
                    matiere={deu.matiere}
                    enseignant={deu.enseignant}
                    moyenne={deu.moy}
                    coef={deu.cf}
                    rang={deu.Rg}
                    detail={deu.details}
                />)}
                <Recap
                    type={"MATIERES DU GROUPE II"}
                    note={notes.deuxieme}
                />
                {notes.humain.map((hum, idx) => <Row
                    key={idx}
                    matiere={hum.matiere}
                    enseignant={hum.enseignant}
                    moyenne={hum.moy}
                    coef={hum.cf}
                    rang={hum.Rg}
                    detail={hum.details}
                />)}
                <Recap
                    type={"MATIERES FORMATION HUM."}
                    note={notes.humain}
                />
            </tbody>
        </table>
    );
};

export default Tableau;