import React from 'react';

const Eleve = ({name,date,lieu,matricule,titulaire,classe,effectif}) => {
    return (
        <div className="eleve">
            <div className="left">
                <div className="name">
                    <span>Nom: <span className='nom'>{name}</span></span>
                </div>
                <div className="birthday">
                    <span className='ne'>Né(e) le: <span className='le'> {date} </span></span>
                    <span>à <span className="lieu">{lieu}</span></span>
                </div>
            </div>
            <div className="center">
                <span className='a'>Matricule :<span className="mat">{lieu}</span></span>
                <span className='b'>Titulaire :<span className="titulaire">{titulaire}</span></span>
            </div>
            <div className="right">
                <span className='a'>Classe: <span className='classe'>{classe}</span></span>
                <span className="b">Effectif: <span className="effectif">{effectif}</span></span>
            </div>
        </div>
    );
};

export default Eleve;