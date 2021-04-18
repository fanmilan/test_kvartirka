import './DestroyPage.scss';
import { useHistory } from "react-router-dom";
import {Page} from "../../common/Page/Page";
import {Asteroids} from "../../common/Asteroid/Asteroid";

export function DestroyPage() {

    const history = useHistory();

    function handleDestroy(resetCart) {
        alert('Бригада будет доставлена на выбранные астероиды в нужный момент и выполнит свою нелёгкую работу.');
        resetCart();
        history.push('/');
    }

    function renderContent(params) {
        if (!params.cart.length) {
            return <div className='destroy__empty'>Астероиды для уничтожения не выбраны</div>
        } else {
            return <>
                        <Asteroids params={params} asteroids={params.cart}/>
                        <div className='destroy__content'>
                            <button className='destroy__order-btn btn btn_destroy' onClick={handleDestroy.bind(null, params.resetCart)}>Заказать бригаду им. Брюса Уиллиса на
                                выбранные астероиды.
                            </button>
                        </div>
                    </>
        }
    }

    return <Page key={'destroy-page'}>
        {
            params => {
                return <div className='destroy-content'>
                    {renderContent(params)}
                </div>
            }
        }
    </Page>
}