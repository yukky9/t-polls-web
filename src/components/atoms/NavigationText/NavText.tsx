import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import classNames from 'classnames'

type NavItemProps = {
    path: string,
    children: string
}

const NavText = ({path, children}:NavItemProps) => {

    const currentPath = useLocation().pathname.split('').filter(el => el !== '/' && el !== '/pattern')
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(currentPath.includes(path))
    }, [currentPath, path])

    return (
        <Link to={path}>
            <div className={classNames('hover:text-black pt-14 font-sans text-xl items-center justify-center', active ? 'text-black font-bold' : null)}>
                {children}
            </div>
        </Link>
    );
};

export default NavText;