import React, { useState } from 'react';
import addPollsIcon from '../../../../assets/Plus.png';
import Modal from 'react-modal';
import closeBt from '../../../../assets/closeOutlined.png'
import FirstCreateFormatButton
    from "../../../atoms/Button/CreateFormatButtons/FirstCreateFormatButton/FirstCreateFormatButton";

const AddPollsButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className='w-28 h-14'>
            <button onClick={closeModal}>
                <img className='' alt='closeBt' src={closeBt}/>
            </button>

            <FirstCreateFormatButton children='Создать'/>
        </div>
    );
    return (
        <div>
            <button
                className="bg-none p-0.5 w-14 h-7">
                <img onClick={openModal} className='w-5 h-5' src={addPollsIcon} alt="add icon"/>
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default AddPollsButton;