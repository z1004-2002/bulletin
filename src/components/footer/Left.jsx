import React from 'react';

const Left = () => {
    return (
        <div className='left'>
            <div className="head">DISCIPLINE</div>
            <div className="puni">
                <table border="1" className='gauche'>
                    <tr>
                        <td className='pun'>Abs. inj(h)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Abs. Jus(h)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Punition:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Retards: </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Retenues:</td>
                        <td></td>
                    </tr>
                </table>
                <table border="1" className='droite'>
                    <tr>
                        <td className='pun'>Avert:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Ret tot</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Av total:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Ex 3jrs: </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='pun'>Blam:</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Left;