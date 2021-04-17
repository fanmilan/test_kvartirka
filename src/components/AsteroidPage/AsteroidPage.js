import {Page} from "../../common/Page/Page";
import {Approach, Asteroid} from "../../common/Asteroid/Asteroid";
import {useEffect, useState} from "react";
import {getAsteroid} from "../../api/nasaAPI";
import {useParams, useHistory} from "react-router-dom";
import {Loader} from "../../common/Loader/Loader";



export function AsteroidPage() {

    const {asteroid_id} = useParams();
    let history = useHistory();
    const [asteroid, setAsteroid] = useState(false);

    useEffect(() => {
        getAsteroid(asteroid_id)
            .then((res) => {
                setAsteroid(res);
            }).catch((error)=>{
                if (error.response?.status === 404) {
                    history.push('/404');
                } else {
                    alert('Произошла ошибка при получении данных');
                }
            });
    }, []);

    return <Page key={'asteroid-page'}>
        {
            params => {
                return (asteroid) ? <div className={'asteroid-content'}>
                    <Asteroid asteroid={asteroid} changeCart={params.changeCart} isInCart={params.cart.includes(asteroid.id)} />
                    <section className='approaches'>
                        <h2 className="approached__title">Все сближения</h2>
                        <div className="approaches__content">
                            {
                                asteroid.approach_data.map((approach, approach_index) => <Approach approach={approach} approach_index={approach_index}/>)
                            }
                        </div>
                    </section>
                </div> : <Loader />
            }
        }
    </Page>
}