import './HomePage.scss';

import {Page} from "../../common/Page/Page";
import {Asteroids} from "../../common/Asteroid/Asteroid";
import {useState} from "react";
import {getAsteroids} from "../../api/nasaAPI";
import InfiniteScroll from "react-infinite-scroller";
import {Loader} from "../../common/Loader/Loader";

export function HomePage() {
    const [nextPage, setNextPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isEndData, setEndData] = useState(false);
    const [asteroids, setAsteroids] = useState([]);
    const [isOnlyDangerous, setIsOnlyDangerous] = useState(false);
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

    function filterAsteroids() {
        if (isOnlyDangerous) {
            return asteroids.filter((item) => item.isDangerous);
        } else {
            return asteroids;
        }
    }

    return <Page key={'home-page'}>
        {
            params => (
                <div className='home-content'>
                    <Settings handleChangeOnlyDangerous={handleChangeOnlyDangerous}
                              distanceUnits={distanceUnits}
                              handleChangeDistanceUnits={handleChangeDistanceUnits}/>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={getData}
                        hasMore={!isEndData}
                        loader={<Loader/>}
                    >
                        <Asteroids asteroids={filterAsteroids()} params={params} distanceUnit={distanceUnits.find(item => item.active)}/>
                    </InfiniteScroll>
                </div>
            )

        }
    </Page>
}


function Settings({handleChangeOnlyDangerous, distanceUnits, handleChangeDistanceUnits}) {

    function renderDistanceUnitLinks() {
        return distanceUnits.map((item, index) => {
            let linkActive = (item.active) ? 'link_active' : '';
            return <span key={index} className={'settings__change-distance'}><a href='#' className={'link ' + linkActive}
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