import './scss/index.scss';

import {Loader} from "../Loader/Loader";
import {usePromiseTracker} from "react-promise-tracker";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export function Page({children}) {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getFromStorage());
    }, []);


    function getFromStorage() {
        let cartInStorage = localStorage.getItem('cart');
        return (cartInStorage) ? JSON.parse(cartInStorage) : [];
    }

    function changeCart(item) {
        let cartInStorage = [...cart];

        // check if item in cart
        const indexInCart = cartInStorage.findIndex(value => value.name === item.name);

        if (indexInCart === -1) {
            //add
            cartInStorage.push(item);
        } else {
            cartInStorage.splice(indexInCart, 1);
            //delete
        }

        setCart(cartInStorage);
        localStorage.setItem('cart', JSON.stringify(cartInStorage));

    }


    const {promiseInProgress} = usePromiseTracker();


    return <div className='page'>
        <div className="page__inside">
            <Header/>
            <main className='main'>
                {
                    children(
                        {
                            fullcart: cart,
                            cart: cart.map(value => value.name),
                            changeCart
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
                <h1 className="header__title">ARMAGGEDON V</h1>
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