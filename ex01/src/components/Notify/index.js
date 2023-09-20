import './style.css';
import { useEffect } from 'react';

function Notify({show, text, handleClose}){
    useEffect(() => {
        if (show){
            setTimeout(() => {
                handleClose();
            }, 1300)
        }
    }, [show])
    return (
        <>
            {show &&
                <div className='container-notify'>
                    <strong>{text}</strong>
                </div>
            }
        </>
    )
}

export default Notify;