import './DestroyPage.scss';

import {Page} from "../../common/Page/Page";
import {Asteroid} from "../../common/Asteroid/Asteroid";

export function DestroyPage({asteroids}) {
    return <Page>
        {
            params => {
                return <div className='destroy-content'>
                    {params.fullcart.map(asteroid => <Asteroid asteroid={asteroid} isInCart={true}
                                                               changeCart={params.changeCart}/>)}
                    <div className='destroy__content'>
                        <button className='destroy__order-btn btn btn_destroy'>Заказать бригаду им. Брюса Уиллиса на
                            выбранные астероиды.
                        </button>
                    </div>
                </div>
            }
        }
    </Page>
}