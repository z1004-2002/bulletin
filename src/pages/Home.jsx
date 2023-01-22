import React from 'react';
import Eleve from '../components/Eleve';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tableau from '../components/Tableau';
import eleve from '../data/eleve';
import notes from '../data/notes';

const Home = () => {
    return (
        <div className='home'>
            <div className="bulletin">
                <Header />
                <div className="title">
                    <span className='tit'>situation périodique N°3</span>
                    <span className='annee'>Année Scolaire 2021-2022</span>
                    <hr />
                </div>
                <Eleve
                    name={eleve.nom}
                    date={eleve.birthdate}
                    lieu={eleve.place}
                    matricule={eleve.matricule}
                    titulaire={eleve.titulaire}
                    classe={eleve.class}
                    effectif={eleve.effectif}
                />
                <Tableau notes={notes}/>
                <Footer notes={notes}/>
                <div className="end">
                    <span>Visa des Parents</span>
                    <span>Le professeur Titulaire</span>
                    <span>L'administration des Etudes</span>
                </div>
            </div>
        </div>
    );
};

export default Home;