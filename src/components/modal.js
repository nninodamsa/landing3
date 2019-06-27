import React from 'react'
import MapContainer from './mapContainer';

function Modal(props) {
    return(
        <div className="ModalBg">
            <div className="Modal">
                <div className="mapHeader">
                    <button 
                        className="Modal-close"
                        onClick={props.closeModal}
                    />
                </div>
                <MapContainer/>
            </div>
        </div>
    )
}

export default Modal;