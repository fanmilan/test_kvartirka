import './HomePage.scss';

import {Page} from "../../common/Page/Page";
import {Asteroid} from "../../common/Asteroid/Asteroid";
import {useEffect, useState} from "react";
import {getAsteroids} from "../../api/nasaAPI";
import InfiniteScroll from "react-infinite-scroller";
import {Loader} from "../../common/Loader/Loader";

export function HomePage() {
    const [nextPage, setNextPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isEndData, setEndData] = useState(false);
    const [asteroids, setAsteroids] = useState([]);
    const [isOnlyDangerous, setIsOnlyDangerous] = useState(false);

    function getData() {
        if (loading) return;
        setLoading(true);
        getAsteroids(nextPage)
            .then((result) => {
                if (result !== false) {
                    setAsteroids([...asteroids, ...result]);
                    setNextPage(nextPage + 1);
                } else {
                    setEndData(true);
                }
            }).catch((error) => {
            console.log(error);
            alert('Произошла ошибка получения данных');
        }).finally(() => {
            setLoading(false);
        });
    }


    function handleChangeOnlyDangerous() {
        setIsOnlyDangerous(!isOnlyDangerous);
    }

    return <Page key={'home-page'}>
        {
            params => (
                <Main asteroids={asteroids}
                      getData={getData}
                      isEndData={isEndData}
                      handleChangeOnlyDangerous={handleChangeOnlyDangerous}
                      isOnlyDangerous={isOnlyDangerous} {...params} />
            )

        }
    </Page>
}


function Main({asteroids, handleChangeOnlyDangerous, isOnlyDangerous, cart, changeCart, getData, isEndData, loading}) {

    const [distanceUnits, setDistanceUnits] = useState([
        {
            'name': 'km',
            'title': 'в километрах',
            'active': true
        },
        {
            'name': 'lunar',
            'title': 'в дистанциях до луны',
            'active': false
        }
    ]);


    function filterAsteroids() {
        if (isOnlyDangerous) {
            return asteroids.filter((item) => item.isDangerous);
        } else {
            return asteroids;
        }
    }

    function handleChangeDistanceUnits(indexDistance) {
        setDistanceUnits(
            distanceUnits.map((item, index) => {
                if (index === indexDistance) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            })
        );
    }


    return <div className='home-content'>
        <Settings handleChangeOnlyDangerous={handleChangeOnlyDangerous}
                  distanceUnits={distanceUnits}
                  handleChangeDistanceUnits={handleChangeDistanceUnits}/>
        <InfiniteScroll
            pageStart={0}
            loadMore={getData}
            hasMore={!loading && !isEndData}
            loader={<Loader/>}
        >
            {
                filterAsteroids().map(asteroid => <Asteroid key={asteroid.id}
                                                            asteroid={asteroid}
                                                            distanceUnit={distanceUnits.find(item => item.active)}
                                                            isInCart={cart.includes(asteroid.id)}
                                                            changeCart={changeCart}/>)
            }
        </InfiniteScroll>
    </div>;
}

function Settings({handleChangeOnlyDangerous, distanceUnits, handleChangeDistanceUnits}) {

    function renderDistanceUnitLinks() {
        return distanceUnits.map((item, index) => {
            let linkActive = (item.active) ? 'link_active' : '';
            return <span className={'settings__change-distance'}><a className={'link ' + linkActive}
                                                                    onClick={handleChangeDistanceUnits.bind(null, index)}>{item.title}</a></span>;
        });
    }

    return <div className={'settings'}>
        <div className="settings__field">
            <input type={'checkbox'} className={'settings__only-dangerous'} id={'settings__only-dangerous'}
                   onChange={handleChangeOnlyDangerous}/>
            <label className={'settings__label'} htmlFor={'settings__only-dangerous'}>Показать только опасные</label>
        </div>
        <div className="settings__distance">Расстояние {renderDistanceUnitLinks()}</div>
    </div>;
}