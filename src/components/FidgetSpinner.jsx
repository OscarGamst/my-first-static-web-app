import React, { useState } from 'react';
import "../styles/index.css";
import bilde from '../pictures/spinner.png';

//bare noe gøy for å få et bilde til å spinne, litt som en fidget spinner eller noe sånt idk
//man trykker på knappen og så spinner den litteranne.
const FidgetSpinner = () => {

    const [spinner, settSpinner] = useState(false); //state for spinninganimasjonen y know

    //Når vi trykker knappen, ska vi sette "spinner" til true
    const handleClick=()=>{
        settSpinner(true);

            //slutt å spinn
        setTimeout(()=>{
        settSpinner(false);
        }, 90); //90 millisekunder delay før den slutter å spinne

    };



    return (
        <div>
            {/*CSS stålet i stor grad fra App.css sin default logo css*/}
            <style>{`
                
                .spinny-bilde {
                    height: 40vmin;
                    pointer-events: none;
                    animation: ${spinner ? 'bilde-spin 0.2s linear' : 'none'};
                    
                }
                
                @keyframes bilde-spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

            `}</style>
            <div className="fidgetSpinner">
                <img src={bilde} className="spinny-bilde" alt="bilde" />
                {/*får faen ikke fløtta knappen tilbake under bildet*/}
                <br/>
                <button onClick={handleClick}>
                    Spinn!
                </button>
            </div>
        </div>
    );
}

export default FidgetSpinner;