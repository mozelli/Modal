import React, { useState } from 'react'

import './styles.css';

interface ModalProps {
    textHeader: string;
    textBody: string;

}

const Modal:React.FC<ModalProps> = ({ children, textHeader, textBody }) => {
    const [modalVisibility, setModalVisibility] = useState("none");
    const [ stateModal, setStateModal ] = useState(false);
    
    function toggleModal() {
        if (stateModal) {
            setModalVisibility("none");
        } else {
            setModalVisibility("block");
        }
        setStateModal(!stateModal);
    }

    return (
        <>
            <div id="button">
                <button onClick={ toggleModal }>{ children }</button>
            </div>

            <div id="modal" style={{ display: modalVisibility }}>
                <div className="content">
                    <header>
                        <h1>{ textHeader }</h1>
                        <span 
                            id="closeButton"
                            onClick={ toggleModal } 
                        >
                            &times;
                        </span>
                    </header>
                    <section className="body">
                        { textBody }
                    </section>
                    <footer>
                        <button
                            onClick={ toggleModal } >Fechar</button>
                    </footer>
                </div>
            </div>            
        </>
    )
}
export default Modal;