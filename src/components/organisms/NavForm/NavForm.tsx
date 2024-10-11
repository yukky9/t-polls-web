import React from 'react';
import NavText from "../../atoms/NavigationText/NavText";

const NavForm = () => {
    return (
        <div className='pl-20 grid'>
            <NavText path='/'>Опросы</NavText>
            <NavText path='/pattern'>Шаблоны</NavText>
        </div>
    );
};

export default NavForm;