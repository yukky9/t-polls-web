import React, { useState } from 'react';
import addPollsIcon from '../../../../assets/Plus.png';
import Modal from 'react-modal';
import closeBt from '../../../../assets/closeOutlined.png';
import CreateForm from "../../../organisms/ModalLayouts/CreateForm/CreateForm";


const AddPollsButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className='grid grid-cols-1 gap-24'>
            <button onClick={closeModal}>
                <img className='m-0.5 w-5 h-5' alt='closeBt' src={closeBt}/>
            </button>
            <CreateForm/>
        </div>
    );
    return (
        <div>
            <button
                className="bg-none p-0.5 w-14 h-7">
            <img onClick={openModal} className='w-5 h-5' src={addPollsIcon} alt="add icon"/>
            </button>
            <Modal className='w-96 h-64 bg-white border-2 rounded-2xl mt-64 translate-x-96 ml-72' isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default AddPollsButton;