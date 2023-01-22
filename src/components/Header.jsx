import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <span className='a'>REPUBLIQUE DU CAMEROUN</span>
                <span className="b">Ministère des enseignements secondaires</span>
                <span className="c">Délégation Régionale du centre</span>
                <hr />
            </div>
            <div className="logo"><img src="./logo192.png" alt="" /></div>
            <div className="right">
                <span className='a'>ARCHIDIOCESE DE YAOUNDE</span>
                <span className="b">Collège la Retraite</span>
                <span className="c">BP: 159 Yaoundé - Tel: 243.58.86.54</span>
                <hr />
            </div>
        </div>
    );
};

export default Header;