//import {GET} from "./ajax";
import axios from "axios";

const TOKEN = "cA2J0g0DcooBp1BYlwwEmW92VJQ5qcY5RzIYcYcL";


function getUrlByPage(page = 0) {
    /* Api возвращает ссылку на следующую страницу, но в ней есть данные, которые пересекаются с предыдущей страницей.*/

    const start_date = new Date();
    const end_date = new Date();

    if (!page) {
        start_date.setDate(start_date.getDate() + page);
        end_date.setDate(start_date.getDate() + 1);
    } else {
        start_date.setDate(start_date.getDate() + 2*page);
        end_date.setDate(start_date.getDate() + 1);
    }

    return`http://www.neowsapp.com/rest/v1/feed?start_date=${start_date.toISOString().split('T')[0]}&end_date=${end_date.toISOString().split('T')[0]}&detailed=false&api_key=${TOKEN}`;
}

export const getAsteroids = (page = 0) => {
    let nextUrl = getUrlByPage(page);
    return axios.get(nextUrl)
        .then(res => {
            if (parseInt(res.data.element_count) === 0) return false;
            //nextUrl = res.data.links.next;
            return Object.values(res.data.near_earth_objects).flat().map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    size: parseInt((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2),
                    isDangerous: item.is_potentially_hazardous_asteroid,
                    distanceKM: parseInt(item.close_approach_data[0].miss_distance.kilometers),
                    distanceLunar: parseInt(item.close_approach_data[0].miss_distance.lunar),
                    unixtime : item.close_approach_data[0].epoch_date_close_approach,
                    date: new Date(item.close_approach_data[0].epoch_date_close_approach),
                }
            }).sort((a, b) => a.unixtime - b.unixtime);
        });
}


export const getAsteroid = (id) => {
    return axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`)
        .then(res => {
            let item = res.data;
            return {
                id: item.id,
                name: item.name,
                size: parseInt((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2),
                isDangerous: item.is_potentially_hazardous_asteroid,
                distanceKM: parseInt(item.close_approach_data[0].miss_distance.kilometers),
                distanceLunar: parseInt(item.close_approach_data[0].miss_distance.lunar),
                date: new Date(item.close_approach_data[0].epoch_date_close_approach),
                unixtime: item.close_approach_data[0].epoch_date_close_approach,
                approach_data: item.close_approach_data.map( approach_item => {
                    return {
                        velocity : parseInt(approach_item.relative_velocity.kilometers_per_hour),
                        full_date : new Date(approach_item.epoch_date_close_approach),
                        distance : parseInt(approach_item.miss_distance.kilometers),
                        orbiting_body : approach_item.orbiting_body
                    }
                })
            }
        });
}
