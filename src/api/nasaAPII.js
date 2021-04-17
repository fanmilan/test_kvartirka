//import {GET} from "./ajax";
import axios from "axios";

const TOKEN = "cA2J0g0DcooBp1BYlwwEmW92VJQ5qcY5RzIYcYcL";

//const url = 'https://api.nasa.gov/planetary/apod?api_key=cA2J0g0DcooBp1BYlwwEmW92VJQ5qcY5RzIYcYcL';
const url = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=cA2J0g0DcooBp1BYlwwEmW92VJQ5qcY5RzIYcYcL';
//const url = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=cA2J0g0DcooBp1BYlwwEmW92VJQ5qcY5RzIYcYcL';

export const getAsteroids = () => {
    return axios.get(url)
        .then(res => {
            return Object.values(res.data.near_earth_objects).flat().map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    size: parseInt((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2),
                    isDangerous: item.is_potentially_hazardous_asteroid,
                    distanceKM: parseInt(item.close_approach_data[0].miss_distance.kilometers),
                    distanceLunar: parseInt(item.close_approach_data[0].miss_distance.lunar),
                    date: item.close_approach_data[0].close_approach_date
                }
            });
        });
}


export const getAsteroid = (id) => {
    return axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`)
        .then(res => {
            let item = res.data;
            console.log(item);
            return {
                id: item.id,
                name: item.name,
                size: parseInt((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2),
                isDangerous: item.is_potentially_hazardous_asteroid,
                distanceKM: parseInt(item.close_approach_data[0].miss_distance.kilometers),
                distanceLunar: parseInt(item.close_approach_data[0].miss_distance.lunar),
                date: item.close_approach_data[0].close_approach_date,
                approach_data: item.close_approach_data.map( approach_item => {
                    return {
                        velocity : approach_item.relative_velocity.kilometers_per_second,
                        full_date : approach_item.close_approach_date_full,
                        distance : approach_item.miss_distance.kilometers,
                        orbiting_body : approach_item.orbiting_body
                    }
                })
            }
        });
}
