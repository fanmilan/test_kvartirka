import './style.scss';

import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export function Page({children}) {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getFromStorage());
    }, []);


    function getFromStorage() {
        let cartInStorage = localStorage.getItem('cart');
        if (cartInStorage) {
            try {
                return JSON.parse(cartInStorage);
            } catch(e) {
                console.log(e);
            }
        }
        return [];
    }

    function changeCart(item) {
        let cartInStorage = [...cart];

        // check if item in cart
        const indexInCart = cartInStorage.findIndex(value => value.id === item.id);

        if (indexInCart === -1) {
            //add
            cartInStorage.push(item);
        } else {
            //delete
            cartInStorage.splice(indexInCart, 1);

        }
        setCart(cartInStorage);
        localStorage.setItem('cart', JSON.stringify(cartInStorage));
    }

    function resetCart() {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    function checkIsInCart(asteroid_id) {
        return (cart.findIndex((item) => item.id === asteroid_id) !== -1);
    }



    return <div className='page'>
        <div className="page__inside">
            <Header/>
            <main className='main'>
                {
                    children(
                        {
                            cart,
                            checkIsInCart,
                            changeCart,
                            resetCart
                        }
                    )
                }
            </main>
            <Footer/>
        </div>
    </div>;
}


function Header() {
    return <header className={'header'}>
        <div className="header__top">
            <div className="header__info">
                <h1 className="header__title">
                    <Link to='/' className={'header__title-link'}>ARMAGGEDON V</Link>
                </h1>
                <div className='header__subtitle'>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
                    Земле.
                </div>
            </div>
            <div className="header__menu">
                <nav className='menu'>
                    <ul className='menu__list'>
                        <li className='menu__item'>
                            <NavLink to='/' className={'menu__link'} activeClassName='menu__link_active'
                                     exact={true}>Астероиды</NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink to='/destroy' className={'menu__link'}
                                     activeClassName='menu__link_active'>Уничтожение</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    </header>
}

function Footer() {
    return <footer className='footer'>
        <div className="footer__copyright">2021 © Все права и планета защищены</div>
    </footer>
}