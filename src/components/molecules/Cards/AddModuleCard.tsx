import React, {useState} from 'react';
import addPattersIcon from '../../../assets/Plus.png'
import Modal from "react-modal";
import closeBt from "../../../assets/closeOutlined.png";
import CreatePatternForm from "../../organisms/ModalLayouts/CreateForm/CreatePatternForm";


const AddModuleCard = () => {
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
            <CreatePatternForm/>
        </div>
    );
    return (
        <div>
        <button onClick={openModal} className='bg-gray-300 w-72 h-60 pl-5 rounded-2xl'>
            <div className='pl-28'>
                <img className='w-5 h-5' alt='AddPattersIcon' src={addPattersIcon}/>
            </div>
        </button>
            <Modal className='w-96 h-64 bg-white border-2 rounded-2xl mt-64 translate-x-96 ml-72' isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default AddModuleCard;