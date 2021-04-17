import {Page} from "../../common/Page/Page";
import {Approach, Asteroid} from "../../common/Asteroid/Asteroid";
import {useEffect, useState} from "react";
import {getAsteroid} from "../../api/nasaAPII";
import {useParams} from "react-router-dom";

export function AsteroidPage() {

    const {asteroid_id} = useParams();

    const [asteroid, setAsteroid] = useState(false);

    useEffect(() => {
        setAsteroid({
            "id": "3542519",
            "name": "(2010 PK9)",
            "size": 187,
            "isDangerous": true,
            "distanceKM": 6663772,
            "distanceLunar": 17,
            "date": "1900-06-01",
            "approach_data": [
                {
                    "velocity": "30.9364987254",
                    "full_date": "1900-Jun-01 16:40",
                    "distance": "6663772.103915698",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "31.7781615255",
                    "full_date": "1900-Jul-07 22:08",
                    "distance": "21192540.189236553",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "23.8645322234",
                    "full_date": "1900-Jul-27 20:47",
                    "distance": "32571677.517057577",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.1654354688",
                    "full_date": "1902-Feb-11 06:38",
                    "distance": "13008244.578554002",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "20.705919212",
                    "full_date": "1903-Sep-02 16:25",
                    "distance": "28730435.401398278",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "15.8484575576",
                    "full_date": "1904-Jul-26 08:05",
                    "distance": "6382657.974226645",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "30.3953511893",
                    "full_date": "1907-Apr-13 18:18",
                    "distance": "17497603.683413016",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "30.7221038899",
                    "full_date": "1907-Aug-23 15:07",
                    "distance": "66448491.477039775",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.3282624901",
                    "full_date": "1908-Aug-17 14:30",
                    "distance": "21900412.19259418",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "26.8654387203",
                    "full_date": "1909-Jul-31 06:55",
                    "distance": "45336389.658587973",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "18.165616675",
                    "full_date": "1912-Sep-02 17:01",
                    "distance": "21343509.168594464",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "17.6676785474",
                    "full_date": "1913-Jul-24 19:43",
                    "distance": "5110934.499802477",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.804674964",
                    "full_date": "1914-Jan-17 12:19",
                    "distance": "13530959.687167091",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "25.4076503446",
                    "full_date": "1915-Sep-12 10:16",
                    "distance": "13234473.179552578",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "27.5362218308",
                    "full_date": "1916-Aug-26 18:08",
                    "distance": "54017039.797050061",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.9181666459",
                    "full_date": "1917-May-22 04:10",
                    "distance": "9732872.233624349",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.3091253861",
                    "full_date": "1917-Aug-09 13:03",
                    "distance": "20547684.358803903",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "30.2104191014",
                    "full_date": "1918-Aug-04 09:54",
                    "distance": "59151460.190056383",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "34.3381359861",
                    "full_date": "1919-Jan-29 16:05",
                    "distance": "10038647.48242418",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "38.8095535284",
                    "full_date": "1920-Oct-08 02:08",
                    "distance": "13856024.504198758",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "28.0905917954",
                    "full_date": "1920-Oct-23 19:32",
                    "distance": "11900102.649987871",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "15.8302816747",
                    "full_date": "1921-Aug-31 19:42",
                    "distance": "18643703.872402958",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "20.6686838284",
                    "full_date": "1922-Jul-25 22:12",
                    "distance": "18550873.681735053",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "41.3051674522",
                    "full_date": "1925-Mar-20 17:08",
                    "distance": "9599153.968087831",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "23.7993078115",
                    "full_date": "1925-Aug-30 22:22",
                    "distance": "39803175.243038993",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.7278209024",
                    "full_date": "1926-Aug-01 00:38",
                    "distance": "14664715.643356326",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "32.2193554408",
                    "full_date": "1926-Nov-28 19:40",
                    "distance": "5895363.228092391",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "27.6258705066",
                    "full_date": "1927-Jul-31 06:22",
                    "distance": "10931816.493891387",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "34.0521432589",
                    "full_date": "1927-Aug-09 10:59",
                    "distance": "74594983.361898225",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.0105644767",
                    "full_date": "1928-Aug-09 11:29",
                    "distance": "12404466.408370616",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.6076271688",
                    "full_date": "1930-Aug-25 02:45",
                    "distance": "20919867.657914582",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.2414637535",
                    "full_date": "1931-Jul-29 03:54",
                    "distance": "34198116.959055271",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.27809295",
                    "full_date": "1934-May-06 18:45",
                    "distance": "10279115.496839558",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "20.1594409726",
                    "full_date": "1934-Sep-02 23:18",
                    "distance": "26959743.326014193",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "16.2259328061",
                    "full_date": "1935-Jul-26 13:52",
                    "distance": "4451905.258533269",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.8617443377",
                    "full_date": "1938-Aug-24 16:06",
                    "distance": "63043973.355389728",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.3109848201",
                    "full_date": "1939-Aug-16 02:36",
                    "distance": "21907789.192679194",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.6226682147",
                    "full_date": "1940-Jul-02 20:48",
                    "distance": "14039994.624080799",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "27.8640113441",
                    "full_date": "1940-Aug-01 07:16",
                    "distance": "49463496.399257962",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "26.4485080794",
                    "full_date": "1941-Feb-10 01:07",
                    "distance": "9082575.842815326",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "29.0538249103",
                    "full_date": "1942-Mar-12 15:28",
                    "distance": "10143580.709246991",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "17.2807410965",
                    "full_date": "1943-Sep-03 09:06",
                    "distance": "19734703.620402381",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "33.3887434992",
                    "full_date": "1943-Nov-20 03:23",
                    "distance": "9564470.928630865",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "18.6254791994",
                    "full_date": "1944-Jul-24 16:51",
                    "distance": "9237509.061009728",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "37.9635300068",
                    "full_date": "1945-Jul-29 14:42",
                    "distance": "12952821.484877467",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "26.1762849915",
                    "full_date": "1947-Aug-29 03:56",
                    "distance": "48862198.59167875",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.872467084",
                    "full_date": "1947-Nov-17 11:29",
                    "distance": "8614412.210849004",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "14.4029680981",
                    "full_date": "1948-Aug-06 01:01",
                    "distance": "18997582.989491704",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.6065145791",
                    "full_date": "1949-Aug-06 01:15",
                    "distance": "64806805.079970829",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "42.8382624512",
                    "full_date": "1950-Jan-09 05:27",
                    "distance": "10914041.678892236",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "33.428506695",
                    "full_date": "1951-Sep-19 06:17",
                    "distance": "5532927.756110486",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "15.185626677",
                    "full_date": "1952-Aug-29 14:03",
                    "distance": "19357367.691935718",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.9568555096",
                    "full_date": "1953-May-30 15:18",
                    "distance": "11411646.455910511",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "21.9943807847",
                    "full_date": "1953-Jul-26 18:46",
                    "distance": "24451400.8487824",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.5165447064",
                    "full_date": "1954-Aug-24 00:16",
                    "distance": "8504943.894677569",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "22.3660500318",
                    "full_date": "1956-Sep-01 03:24",
                    "distance": "34513141.320564657",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "15.1637262352",
                    "full_date": "1957-Jul-29 03:29",
                    "distance": "11041395.57232577",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "32.1585541617",
                    "full_date": "1960-Aug-21 12:01",
                    "distance": "72008187.827214451",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.1343101613",
                    "full_date": "1961-May-30 13:13",
                    "distance": "8576167.141388829",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "14.4043932363",
                    "full_date": "1961-Aug-21 09:27",
                    "distance": "21787822.681422852",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.7004542073",
                    "full_date": "1962-Jul-30 12:58",
                    "distance": "40326583.423624005",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.7710929167",
                    "full_date": "1965-Apr-23 18:22",
                    "distance": "13850362.838170525",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "18.9137866748",
                    "full_date": "1965-Sep-03 06:57",
                    "distance": "23415928.105140014",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "17.0920894562",
                    "full_date": "1966-Jul-25 14:11",
                    "distance": "2831609.142825847",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.5401759249",
                    "full_date": "1967-Jan-01 16:07",
                    "distance": "9876890.716424616",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "24.7936687348",
                    "full_date": "1968-Mar-06 02:39",
                    "distance": "8815822.166179692",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "34.6189674469",
                    "full_date": "1968-Sep-10 10:21",
                    "distance": "10187217.16626367",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "28.147960993",
                    "full_date": "1969-Aug-26 14:37",
                    "distance": "56564578.950752886",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "39.5401982595",
                    "full_date": "1970-May-21 00:03",
                    "distance": "14671741.133326201",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.2920387291",
                    "full_date": "1970-Aug-11 11:32",
                    "distance": "21146252.843003687",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.7057624845",
                    "full_date": "1971-Aug-04 09:19",
                    "distance": "57095808.885890422",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "15.9538653953",
                    "full_date": "1974-Sep-01 17:21",
                    "distance": "18850016.374330351",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "37.9260916164",
                    "full_date": "1974-Nov-01 03:23",
                    "distance": "6969467.377694227",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "24.8719724406",
                    "full_date": "1974-Dec-11 20:29",
                    "distance": "8719765.598249497",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "20.4395423318",
                    "full_date": "1975-Jul-26 07:58",
                    "distance": "17557003.537267761",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.3323590993",
                    "full_date": "1976-Jul-11 20:13",
                    "distance": "8184174.600965508",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "23.9253776408",
                    "full_date": "1978-Aug-31 09:50",
                    "distance": "40328852.568995526",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.7215244134",
                    "full_date": "1979-Aug-01 15:01",
                    "distance": "14835392.825625481",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "34.0644227764",
                    "full_date": "1980-Aug-08 23:43",
                    "distance": "74587376.220450003",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.9886124652",
                    "full_date": "1981-Sep-17 14:22",
                    "distance": "8622352.491793929",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "14.5663701603",
                    "full_date": "1983-Aug-25 10:04",
                    "distance": "21158903.407362793",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.3861441179",
                    "full_date": "1984-Jul-28 19:34",
                    "distance": "34725194.356517347",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "19.9365156893",
                    "full_date": "1987-Sep-03 14:29",
                    "distance": "26540458.853298061",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.1345314616",
                    "full_date": "1988-Jun-06 23:45",
                    "distance": "13456901.171864869",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "24.9965712015",
                    "full_date": "1988-Jun-24 07:25",
                    "distance": "8590775.373394329",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "16.3625968948",
                    "full_date": "1988-Jul-25 21:10",
                    "distance": "3736428.626971636",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.429360904",
                    "full_date": "1990-Feb-14 16:04",
                    "distance": "9921987.4730493",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "29.6044908891",
                    "full_date": "1991-Aug-25 11:17",
                    "distance": "62234976.931858851",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "33.7436250161",
                    "full_date": "1991-Oct-25 03:28",
                    "distance": "9706228.254585869",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.2838689333",
                    "full_date": "1992-Aug-15 00:22",
                    "distance": "21972213.754751286",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "38.0351769518",
                    "full_date": "1993-Jul-03 12:07",
                    "distance": "13024470.950880144",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "28.0973229954",
                    "full_date": "1993-Aug-02 02:58",
                    "distance": "50428371.379843345",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.1345649228",
                    "full_date": "1995-Mar-31 16:06",
                    "distance": "9601020.021998637",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "17.1327755389",
                    "full_date": "1996-Sep-02 19:20",
                    "distance": "19772975.692278091",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "18.7564161806",
                    "full_date": "1997-Jul-25 06:04",
                    "distance": "9857076.313985459",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "45.0721634452",
                    "full_date": "1997-Dec-13 16:07",
                    "distance": "12919563.873765009",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "35.744490949",
                    "full_date": "1999-Aug-23 12:15",
                    "distance": "5806813.675756027",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "26.0907486902",
                    "full_date": "2000-Aug-28 19:27",
                    "distance": "48601309.839697318",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.6554154609",
                    "full_date": "2001-May-03 05:18",
                    "distance": "9223202.253752491",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.3848839212",
                    "full_date": "2001-Aug-06 07:55",
                    "distance": "18937122.785934399",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "23.4089496797",
                    "full_date": "2002-Jan-05 03:17",
                    "distance": "11012658.315171741",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "31.6672069613",
                    "full_date": "2002-Aug-06 15:09",
                    "distance": "65012071.518792247",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "15.2437455829",
                    "full_date": "2005-Aug-30 06:32",
                    "distance": "19499384.106441775",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "21.8838685047",
                    "full_date": "2006-Jul-27 04:50",
                    "distance": "23858433.383634351",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "22.6803664653",
                    "full_date": "2008-Oct-11 15:40",
                    "distance": "12873746.145165647",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "22.6130429754",
                    "full_date": "2009-Sep-01 09:51",
                    "distance": "35646224.400494419",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "15.027964908",
                    "full_date": "2010-Jul-30 05:23",
                    "distance": "11919011.491640557",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "32.6907032069",
                    "full_date": "2013-Aug-21 07:22",
                    "distance": "74229309.529864643",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.4814181932",
                    "full_date": "2014-Aug-23 08:41",
                    "distance": "21634801.742881086",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.067028985",
                    "full_date": "2014-Dec-04 13:36",
                    "distance": "13524346.578685658",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "21.7513654941",
                    "full_date": "2015-Jul-19 05:52",
                    "distance": "15763786.360999906",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "25.0600253133",
                    "full_date": "2015-Jul-30 10:21",
                    "distance": "37640784.078413379",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.1946981967",
                    "full_date": "2016-Aug-13 04:21",
                    "distance": "10002369.236000043",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "33.2218831475",
                    "full_date": "2018-Apr-22 13:15",
                    "distance": "9469191.506675533",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "19.6774010488",
                    "full_date": "2018-Sep-03 13:36",
                    "distance": "25751360.26293844",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "16.4909559941",
                    "full_date": "2019-Jul-26 15:04",
                    "distance": "3152292.95631499",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "36.9899129221",
                    "full_date": "2019-Dec-30 17:39",
                    "distance": "11982023.849819849",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "20.5915440279",
                    "full_date": "2022-Apr-25 02:39",
                    "distance": "20266771.498089148",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "29.7283972311",
                    "full_date": "2022-Aug-25 05:02",
                    "distance": "62692734.745424991",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.3080496511",
                    "full_date": "2023-Aug-16 11:36",
                    "distance": "22001783.404373569",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.7344109019",
                    "full_date": "2024-Aug-01 14:16",
                    "distance": "48891471.364328018",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "45.0013621278",
                    "full_date": "2026-Feb-17 01:37",
                    "distance": "12851989.349022623",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "17.6478676045",
                    "full_date": "2027-Sep-03 22:29",
                    "distance": "20704589.082447674",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "37.9112385644",
                    "full_date": "2027-Oct-27 08:34",
                    "distance": "6952645.740483568",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "18.1453954657",
                    "full_date": "2028-Jul-25 02:35",
                    "distance": "6889474.329848892",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.2632857446",
                    "full_date": "2029-Jul-06 02:17",
                    "distance": "6406034.885382195",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "27.9823098164",
                    "full_date": "2031-Mar-17 00:49",
                    "distance": "11914596.798657709",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "27.1867963105",
                    "full_date": "2031-Aug-28 10:32",
                    "distance": "52945540.640037896",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.3317632374",
                    "full_date": "2032-Aug-09 05:03",
                    "distance": "20428671.219813284",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "30.3614001319",
                    "full_date": "2033-Aug-04 23:21",
                    "distance": "59693607.538389927",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.8623885751",
                    "full_date": "2035-Mar-31 08:59",
                    "distance": "21222585.051452678",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "15.8741364102",
                    "full_date": "2036-Sep-01 06:49",
                    "distance": "19024729.452815727",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "20.4506361773",
                    "full_date": "2037-Jul-26 03:24",
                    "distance": "17516154.312965987",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.3489002219",
                    "full_date": "2040-Aug-30 18:25",
                    "distance": "42023985.079009596",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.6157339289",
                    "full_date": "2041-Aug-02 14:58",
                    "distance": "16014842.4339407",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "30.1492654842",
                    "full_date": "2042-Jan-04 00:08",
                    "distance": "16645131.859932302",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "33.3039897044",
                    "full_date": "2042-Aug-08 21:09",
                    "distance": "71612586.507453546",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.7934944938",
                    "full_date": "2045-Aug-27 17:08",
                    "distance": "20515811.006702129",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.129004479",
                    "full_date": "2046-Jun-24 11:35",
                    "distance": "11485368.824798843",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "23.1600777217",
                    "full_date": "2046-Jul-28 11:52",
                    "distance": "29454331.685319464",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.1272842221",
                    "full_date": "2048-Mar-02 22:03",
                    "distance": "9252287.580270649",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "28.52078136",
                    "full_date": "2048-Oct-09 17:38",
                    "distance": "12584129.635494931",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "21.4771091785",
                    "full_date": "2049-Sep-02 11:47",
                    "distance": "31678878.969755638",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "35.124621739",
                    "full_date": "2049-Nov-10 05:33",
                    "distance": "10412704.375178313",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "15.469160394",
                    "full_date": "2050-Jul-28 14:11",
                    "distance": "8766007.242333078",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "38.8464951446",
                    "full_date": "2051-Jul-20 08:50",
                    "distance": "13822173.408416436",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "31.6425927221",
                    "full_date": "2053-Aug-22 19:46",
                    "distance": "70200440.254712857",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.3683342103",
                    "full_date": "2054-Aug-21 03:23",
                    "distance": "22051357.505569057",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "26.8011836265",
                    "full_date": "2055-Jul-16 12:04",
                    "distance": "9220620.882666493",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "25.9819367692",
                    "full_date": "2055-Jul-31 13:58",
                    "distance": "41470616.663723518",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "46.2013440175",
                    "full_date": "2055-Dec-30 00:31",
                    "distance": "13953125.250301766",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "38.1654622666",
                    "full_date": "2057-Sep-07 11:45",
                    "distance": "7097233.847093434",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "18.9175824991",
                    "full_date": "2058-Sep-03 23:45",
                    "distance": "23720800.530794395",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.0493082504",
                    "full_date": "2059-May-18 08:29",
                    "distance": "6527586.296312465",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "17.0165108482",
                    "full_date": "2059-Jul-26 08:27",
                    "distance": "2388097.923374269",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.1419866343",
                    "full_date": "2061-Jan-26 23:41",
                    "distance": "12990441.160442107",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "25.5439730022",
                    "full_date": "2062-Apr-21 14:26",
                    "distance": "8277686.942960826",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "28.5138619047",
                    "full_date": "2062-Aug-26 22:02",
                    "distance": "58068496.615236555",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.2803922682",
                    "full_date": "2063-Aug-13 06:27",
                    "distance": "21557159.864919393",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.1867243783",
                    "full_date": "2064-Aug-03 12:34",
                    "distance": "54931064.367252264",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "16.3975982007",
                    "full_date": "2067-Sep-03 04:17",
                    "distance": "19292820.115535125",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "19.7435221888",
                    "full_date": "2068-Jul-25 16:22",
                    "distance": "14251357.699697262",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.7638533276",
                    "full_date": "2069-Jan-25 23:05",
                    "distance": "8617881.011459629",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "24.9297281335",
                    "full_date": "2071-Aug-31 03:02",
                    "distance": "44384214.19078476",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.5119195764",
                    "full_date": "2072-Aug-03 17:18",
                    "distance": "17106755.087982011",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.2741678175",
                    "full_date": "2072-Dec-19 17:55",
                    "distance": "14350825.338420049",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "32.8610957359",
                    "full_date": "2073-Aug-08 05:24",
                    "distance": "69754529.620064562",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.7904087281",
                    "full_date": "2074-Aug-29 14:06",
                    "distance": "10217019.844488052",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "24.0971693445",
                    "full_date": "2075-Nov-02 09:54",
                    "distance": "9509866.464418544",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "33.1767011295",
                    "full_date": "2076-May-08 02:41",
                    "distance": "9438466.946537063",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.8714858962",
                    "full_date": "2076-Aug-28 03:23",
                    "distance": "20489054.245829456",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "22.9874070649",
                    "full_date": "2077-Jul-28 06:12",
                    "distance": "28634268.864073846",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "37.3823814325",
                    "full_date": "2078-Jan-15 10:46",
                    "distance": "12354340.186316319",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "21.5133776748",
                    "full_date": "2080-Sep-02 09:44",
                    "distance": "31928475.281640759",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "15.4685891663",
                    "full_date": "2081-Jul-28 11:23",
                    "distance": "8708505.531132254",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "46.2683290113",
                    "full_date": "2082-Jun-27 15:28",
                    "distance": "14011414.220293465",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "23.2646058874",
                    "full_date": "2082-Aug-08 20:22",
                    "distance": "11234144.19993792",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "38.1861883831",
                    "full_date": "2084-Mar-06 02:52",
                    "distance": "7099166.008302993",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "31.5518773387",
                    "full_date": "2084-Aug-22 20:40",
                    "distance": "69873058.361152121",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.380327931",
                    "full_date": "2085-Aug-20 17:22",
                    "distance": "22180678.790510535",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.0098202282",
                    "full_date": "2085-Nov-14 00:11",
                    "distance": "6561420.308018033",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "26.1126739866",
                    "full_date": "2086-Jul-31 15:41",
                    "distance": "42088087.541907791",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.0454665703",
                    "full_date": "2087-Jul-26 07:44",
                    "distance": "12611516.712033062",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "22.0538939667",
                    "full_date": "2089-May-15 07:30",
                    "distance": "14683935.738337334",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "18.7627564667",
                    "full_date": "2089-Sep-03 22:14",
                    "distance": "23439797.537362965",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "17.1727155468",
                    "full_date": "2090-Jul-26 04:11",
                    "distance": "2622018.308295913",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.2129798986",
                    "full_date": "2093-Aug-27 04:53",
                    "distance": "57023544.452963749",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.2986539278",
                    "full_date": "2094-Aug-12 07:11",
                    "distance": "21367217.468951638",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.5845389215",
                    "full_date": "2095-Aug-04 21:09",
                    "distance": "56500602.509100379",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "21.5315865817",
                    "full_date": "2096-Feb-19 23:36",
                    "distance": "16464454.718284275",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "16.1464495082",
                    "full_date": "2098-Sep-02 17:14",
                    "distance": "19340685.52481926",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "23.9526376949",
                    "full_date": "2099-Jun-18 04:37",
                    "distance": "14695351.910831922",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "20.1080421499",
                    "full_date": "2099-Jul-26 18:38",
                    "distance": "15871208.716862073",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.7463297406",
                    "full_date": "2101-Feb-26 04:13",
                    "distance": "10229898.829834861",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "24.4512220812",
                    "full_date": "2102-Sep-01 12:31",
                    "distance": "42638811.844761193",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "33.4354191481",
                    "full_date": "2102-Nov-05 19:36",
                    "distance": "9532100.582485377",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "21.1540242592",
                    "full_date": "2102-Nov-27 17:14",
                    "distance": "17863518.472735807",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "14.6091812262",
                    "full_date": "2103-Aug-04 11:42",
                    "distance": "16136244.665875006",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "37.8184582755",
                    "full_date": "2104-Jul-15 05:15",
                    "distance": "12789416.389707095",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "33.3443812889",
                    "full_date": "2104-Aug-09 19:00",
                    "distance": "71786100.499171724",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.7180797763",
                    "full_date": "2107-Aug-28 21:57",
                    "distance": "20946219.577031461",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "23.5158431394",
                    "full_date": "2108-Jul-29 15:39",
                    "distance": "30982277.355768284",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "44.6078412717",
                    "full_date": "2108-Dec-25 14:32",
                    "distance": "12471938.96720481",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "20.7106122765",
                    "full_date": "2109-Sep-03 12:02",
                    "distance": "19657394.418183994",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "35.3954764546",
                    "full_date": "2110-Sep-04 10:34",
                    "distance": "5624377.248197013",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "20.9633354001",
                    "full_date": "2111-Sep-04 16:53",
                    "distance": "30165493.854471149",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.6025750809",
                    "full_date": "2112-May-15 02:28",
                    "distance": "9289833.249769",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "15.7523647948",
                    "full_date": "2112-Jul-28 14:51",
                    "distance": "6943301.393769971",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "30.8733585092",
                    "full_date": "2115-Aug-25 14:46",
                    "distance": "67339232.171001781",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.3176574131",
                    "full_date": "2116-Aug-19 21:23",
                    "distance": "22337913.691613183",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "26.8103114985",
                    "full_date": "2117-Aug-02 07:27",
                    "distance": "44931399.546586294",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "18.1717649577",
                    "full_date": "2120-Sep-04 20:41",
                    "distance": "22167703.404296298",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "17.677875139",
                    "full_date": "2121-Jul-26 20:53",
                    "distance": "4615882.6702749",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.4625019565",
                    "full_date": "2124-Aug-28 23:15",
                    "distance": "54139579.541268273",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.2966004411",
                    "full_date": "2125-Aug-11 07:21",
                    "distance": "20753014.601116876",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.0986596456",
                    "full_date": "2125-Dec-16 08:59",
                    "distance": "13410521.718223444",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "30.3069196469",
                    "full_date": "2126-Aug-06 16:24",
                    "distance": "59535897.095578123",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.7756177772",
                    "full_date": "2127-Aug-26 04:58",
                    "distance": "9630322.93861871",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "34.4308074726",
                    "full_date": "2129-May-04 19:12",
                    "distance": "9973394.222951223",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "15.7301052729",
                    "full_date": "2129-Sep-02 17:57",
                    "distance": "19441056.57011919",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "20.8100001782",
                    "full_date": "2130-Jul-28 02:24",
                    "distance": "19084782.151775152",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "38.9902015873",
                    "full_date": "2131-Jan-12 05:54",
                    "distance": "14024083.963099505",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "23.6518744193",
                    "full_date": "2133-Sep-02 05:39",
                    "distance": "39679752.841468207",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.7556744639",
                    "full_date": "2134-Aug-02 15:25",
                    "distance": "14388833.040939895",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "41.0702577263",
                    "full_date": "2135-Jun-24 22:43",
                    "distance": "9314534.595747021",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "32.1765858017",
                    "full_date": "2137-Mar-04 00:34",
                    "distance": "5797306.970474119",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.565193918",
                    "full_date": "2138-Aug-26 20:49",
                    "distance": "21545107.37788476",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.9531701225",
                    "full_date": "2138-Nov-13 12:07",
                    "distance": "12198792.898785141",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "24.3893432968",
                    "full_date": "2139-Jul-31 09:14",
                    "distance": "34638528.525600236",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "20.0670895468",
                    "full_date": "2142-Sep-05 02:47",
                    "distance": "27371955.664144584",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "16.2526153294",
                    "full_date": "2143-Jul-28 12:48",
                    "distance": "3987260.168469347",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "29.9338157674",
                    "full_date": "2146-Aug-26 16:03",
                    "distance": "63684723.292762784",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.2921636601",
                    "full_date": "2147-Aug-18 10:56",
                    "distance": "22295229.080963953",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.6958644322",
                    "full_date": "2148-Aug-03 05:46",
                    "distance": "48722898.036743821",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.0310791137",
                    "full_date": "2149-Sep-03 02:48",
                    "distance": "18837547.885538822",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "17.5086074898",
                    "full_date": "2151-Sep-05 14:27",
                    "distance": "20854030.054201618",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "26.5494338854",
                    "full_date": "2152-Jun-14 15:56",
                    "distance": "11935296.775607905",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "18.3379595418",
                    "full_date": "2152-Jul-26 17:38",
                    "distance": "7657282.241108835",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "30.9799063837",
                    "full_date": "2154-Feb-22 07:11",
                    "distance": "9194698.87790842",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "26.6757839563",
                    "full_date": "2155-Aug-30 18:22",
                    "distance": "51112452.085945522",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "35.3765721448",
                    "full_date": "2155-Nov-01 18:14",
                    "distance": "10557461.12346703",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "29.9036267353",
                    "full_date": "2156-Jun-09 03:14",
                    "distance": "15832912.529809719",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "14.3452784003",
                    "full_date": "2156-Aug-09 07:54",
                    "distance": "19932305.935946894",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "39.7100033982",
                    "full_date": "2157-Jul-11 02:43",
                    "distance": "14787258.559049382",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "31.0689367349",
                    "full_date": "2157-Aug-07 11:35",
                    "distance": "62503455.262498567",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "15.4542252386",
                    "full_date": "2160-Sep-01 18:24",
                    "distance": "19683361.676297742",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "21.3825782687",
                    "full_date": "2161-Jul-28 09:10",
                    "distance": "21508552.210843466",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "41.184446364",
                    "full_date": "2161-Dec-21 12:50",
                    "distance": "9400659.136691111",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "29.1075056591",
                    "full_date": "2163-Mar-16 08:34",
                    "distance": "13786899.412493609",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "32.228945698",
                    "full_date": "2163-Aug-31 14:44",
                    "distance": "5761035.411074771",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "23.106081156",
                    "full_date": "2164-Sep-02 15:03",
                    "distance": "37728788.092197214",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.9448152224",
                    "full_date": "2165-May-12 04:16",
                    "distance": "12286048.115390478",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "14.8944068742",
                    "full_date": "2165-Aug-01 13:30",
                    "distance": "13159439.360936891",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.5055939231",
                    "full_date": "2169-Aug-25 15:24",
                    "distance": "21865032.460896837",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.4071399412",
                    "full_date": "2169-Dec-20 15:52",
                    "distance": "12077909.487223782",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "24.8212715881",
                    "full_date": "2170-Jul-31 18:13",
                    "distance": "36538596.668665793",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "19.7012465372",
                    "full_date": "2173-Sep-05 05:11",
                    "distance": "26242026.900183133",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "16.5244265789",
                    "full_date": "2174-Jul-28 02:52",
                    "distance": "2781135.569477197",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.4777260356",
                    "full_date": "2176-Sep-25 20:14",
                    "distance": "10085276.480272552",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "29.5408253621",
                    "full_date": "2177-Aug-27 01:42",
                    "distance": "62195558.626143414",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.2927974626",
                    "full_date": "2178-Aug-17 08:49",
                    "distance": "22234570.465751667",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "27.3075457271",
                    "full_date": "2178-Dec-12 14:34",
                    "distance": "11229487.053687163",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "28.0661022231",
                    "full_date": "2179-Aug-04 12:48",
                    "distance": "50142635.274362772",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "31.2229654906",
                    "full_date": "2180-Aug-21 00:07",
                    "distance": "9127425.957431741",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "35.1688684828",
                    "full_date": "2182-Apr-30 07:05",
                    "distance": "10368424.078848728",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "17.2525068317",
                    "full_date": "2182-Sep-05 09:40",
                    "distance": "20553688.918109963",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "25.9236281098",
                    "full_date": "2183-Jul-02 18:08",
                    "distance": "8033578.150223471",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "18.6028328753",
                    "full_date": "2183-Jul-27 16:07",
                    "distance": "8792960.559847144",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "39.1458621114",
                    "full_date": "2184-Jan-07 12:34",
                    "distance": "14136855.534878623",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "26.3954254611",
                    "full_date": "2186-Aug-30 23:06",
                    "distance": "50093312.16847357",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.3703706786",
                    "full_date": "2187-Aug-09 13:32",
                    "distance": "19624954.209833216",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "43.0635015137",
                    "full_date": "2188-Jun-18 18:11",
                    "distance": "11034421.663701471",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "31.2963615573",
                    "full_date": "2188-Aug-07 17:05",
                    "distance": "63480620.994646132",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "34.4803963682",
                    "full_date": "2190-Feb-26 12:44",
                    "distance": "5378597.312613675",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "24.9794095316",
                    "full_date": "2190-Apr-08 00:43",
                    "distance": "8135407.385801439",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "15.3625765785",
                    "full_date": "2191-Sep-02 09:17",
                    "distance": "19861019.798291086",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "28.4195358483",
                    "full_date": "2191-Nov-07 02:57",
                    "distance": "9619824.713614229",
                    "orbiting_body": "Merc"
                },
                {
                    "velocity": "21.4820102397",
                    "full_date": "2192-Jul-28 09:17",
                    "distance": "21995092.490039949",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "23.0727555769",
                    "full_date": "2195-Sep-03 14:04",
                    "distance": "37619777.635266701",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "14.9085161736",
                    "full_date": "2196-Aug-01 09:17",
                    "distance": "13111063.718197547",
                    "orbiting_body": "Earth"
                },
                {
                    "velocity": "24.0273968384",
                    "full_date": "2197-Jan-12 08:34",
                    "distance": "9379802.052057841",
                    "orbiting_body": "Venus"
                },
                {
                    "velocity": "14.5145715187",
                    "full_date": "2200-Aug-27 00:50",
                    "distance": "21830520.082689967",
                    "orbiting_body": "Earth"
                }
            ]
        });

        /*getAsteroid(asteroid_id)
            .then((res) => {
                console.log(res);
                setAsteroid(res);
            });*/
    }, []);

    return <Page>
        {
            params => {
                return asteroid && <div className={'asteroid-content'}>
                    <Asteroid asteroid={asteroid} changeCart={params.changeCart} isInCart />
                    <section className='approaches'>
                        <h2 className="approached__title">Все сближения</h2>
                        <div className="approaches__content">
                            {
                                asteroid.approach_data.map(approach => <Approach approach={approach}/>)
                            }
                        </div>
                    </section>
                </div>
            }
        }
    </Page>
}