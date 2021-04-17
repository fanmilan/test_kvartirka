import './style.scss';
import {useState} from "react";
import {Link} from "react-router-dom";


/*
*  Size of Asteroid
*   72px = 85m 1m = 1,180555555555556px
*   189px = 300m 1m = 1,587301587301587px
*   607px = 850m 1m = 1,400329489291598
*
*
* ~ 1,389106666666667 = 1.4
*
* */


export function Asteroid({asteroid, distanceUnit, changeCart, isInCart}) {


    function renderDistance() {
        switch (distanceUnit?.name) {
            case 'lunar':
                return asteroid.distanceLunar.toLocaleString('ru-RU') + ' дист. до луны';
                break;
            default:
                return asteroid.distanceKM.toLocaleString('ru-RU') + ' км';
                break;
        }
    }

    function renderDate() {
        return new Date(asteroid.unixtime).toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).slice(0, -3)
    }

    return <article className={`asteroid ${asteroid.isDangerous ? 'asteroid_dangerous' : ''}`} key={asteroid.id} id={asteroid.id}>
        <div className="asteroid__image-wrap">
            <div className="asteroid__image asteroid__image_dino"></div>
            <div className="asteroid__image asteroid__image_asteroid" style={{backgroundSize : asteroid.size / 1.4, width : asteroid.size / 1.4, height : asteroid.size / 1.4}}>

            </div>
        </div>
        <div className="asteroid__body">
            <div className="asteroid__info">
                <h2 className="asteroid__title"><Link to={'asteroids/'+asteroid.id} className={'asteroid__link'}>{asteroid.name}</Link></h2>
                <div className="asteroid__attrs">
                    <dl className="attr attr_detail">
                        <dt className="attr__name">Дата</dt>
                        <dd className="attr__value"><span>{renderDate()}</span></dd>
                    </dl>
                    <dl className="attr attr_detail">
                        <dt className="attr__name">Расстояние</dt>
                        <dd className="attr__value"><span>{renderDistance()}</span></dd>
                    </dl>
                    <dl className="attr attr_detail">
                        <dt className="attr__name">Размер</dt>
                        <dd className="attr__value"><span>{asteroid.size.toLocaleString('ru-RU')} м</span></dd>
                    </dl>
                </div>
            </div>
            <div className="asteroid__btn-wrap">
                <div className='asteroid__verdict'>
                    <div className='asteroid__verdict-title'>Оценка:</div>
                    <div className='asteroid__verdict-status'>{asteroid.isDangerous ? 'опасен' : 'не опасен'}</div>
                </div>
                <button className="asteroid__btn asteroid__btn_destroy" onClick={changeCart.bind(null, asteroid)}>{ isInCart ? 'Не уничтожать' : 'На уничтожение' }</button>
            </div>
        </div>
    </article>;
}

export function Approach({approach, approach_index}) {
    return <article className={'approach'} key={approach_index}>
        <div className={'approach__attrs'}>
            <Attr name={'Скорость'} value={approach.velocity.toLocaleString('ru-RU') +' км/ч'}/>
            <Attr name={'Время'} value={approach.full_date.toLocaleDateString() + ' ' + approach.full_date.toLocaleTimeString()}/>
            <Attr name={'Расстояние'} value={approach.distance.toLocaleString('ru-RU')  +' км'}/>
            <Attr name={'Орбита'} value={approach.orbiting_body}/>
        </div>
    </article>;
}

function Attr({name, value}) {
    return <dl className="attr attr_detail">
        <dt className="attr__name">{name}</dt>
        <dd className="attr__value"><span>{value}</span></dd>
    </dl>;
}