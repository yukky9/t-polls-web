import React from 'react';
import AddPollsButton from "../../atoms/IconButton/AddPollsButton/AddPollsButton";
import MainText from "../../atoms/MainText/MainText";

const MainTopPanel = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center gap-32'>
                <MainText>Тема опроса</MainText>
                    <MainText>Дата создания</MainText>
                    <MainText>Прошли опрос</MainText>
                    <MainText>Рейтинг</MainText>
                <AddPollsButton/>
            </div>
        </div>
    );
};

export default MainTopPanel;