import React, {useState} from 'react';
import GeneralDiagram from "../../../../molecules/Diagramms/GeneralDiagram/GeneralDiagram";
import closeBt from "../../../../../assets/closeOutlined.png";
import FirstForm from "../../../../organisms/ModalLayouts/StatisticsForm/FirstForm/FirstForm";
import Modal from "react-modal";
import PrognozCard from "../../../../molecules/Cards/PrognozCard/PrognozCard";

const SecondForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className='grid grid-cols-1'>
            <button onClick={closeModal}>
                <img className='m-0.5 w-5 h-5' alt='closeBt' src={closeBt}/>
            </button>
            <FirstForm/>
        </div>
    );
    return (
        <div className='grid grid-cols-1 gap-28'>
            <div className='text-center flex flex-row'>
                <GeneralDiagram/>
                <PrognozCard text='' title='Предположения нейросети'/>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default SecondForm;