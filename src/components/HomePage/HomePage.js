import './HomePage.scss';

import {Page} from "../../common/Page/Page";
import {Asteroid} from "../../common/Asteroid/Asteroid";
import {useEffect, useState} from "react";

export function HomePage() {

    const [asteroids, setAsteroids] = useState([]);
    const [isOnlyDangerous, setIsOnlyDangerous] = useState(false);

    useEffect(() => {

        setAsteroids(
            [
                {
                    "name": "8176 (1991 WA)",
                    "size": 1792,
                    "isDangerous": false,
                    "distanceKM": 72747251,
                    "distanceMoon": 189,
                    "date": "2021-04-17"
                },
                {
                    "name": "519354 (2011 KR12)",
                    "size": 217,
                    "isDangerous": false,
                    "distanceKM": 57696573,
                    "distanceMoon": 150,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2011 AH5)",
                    "size": 27,
                    "isDangerous": false,
                    "distanceKM": 38865975,
                    "distanceMoon": 101,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2017 YD2)",
                    "size": 7,
                    "isDangerous": false,
                    "distanceKM": 61955600,
                    "distanceMoon": 161,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2020 HE5)",
                    "size": 12,
                    "isDangerous": false,
                    "distanceKM": 3258319,
                    "distanceMoon": 8,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2020 TR1)",
                    "size": 15,
                    "isDangerous": false,
                    "distanceKM": 58403776,
                    "distanceMoon": 151,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2020 TR7)",
                    "size": 100,
                    "isDangerous": false,
                    "distanceKM": 34463886,
                    "distanceMoon": 89,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2021 GH1)",
                    "size": 64,
                    "isDangerous": false,
                    "distanceKM": 21988083,
                    "distanceMoon": 57,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2021 GQ1)",
                    "size": 47,
                    "isDangerous": false,
                    "distanceKM": 11489442,
                    "distanceMoon": 29,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2021 GC3)",
                    "size": 278,
                    "isDangerous": false,
                    "distanceKM": 72632706,
                    "distanceMoon": 188,
                    "date": "2021-04-17"
                },
                {
                    "name": "(2021 GU5)",
                    "size": 28,
                    "isDangerous": false,
                    "distanceKM": 2005296,
                    "distanceMoon": 5,
                    "date": "2021-04-17"
                },
                {
                    "name": "468910 (2014 KQ76)",
                    "size": 200,
                    "isDangerous": true,
                    "distanceKM": 12356102,
                    "distanceMoon": 32,
                    "date": "2021-04-16"
                },
                {
                    "name": "522684 (2016 JP)",
                    "size": 255,
                    "isDangerous": true,
                    "distanceKM": 21664392,
                    "distanceMoon": 56,
                    "date": "2021-04-16"
                },
                {
                    "name": "(1993 HC)",
                    "size": 305,
                    "isDangerous": false,
                    "distanceKM": 48668352,
                    "distanceMoon": 126,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2008 BC22)",
                    "size": 493,
                    "isDangerous": false,
                    "distanceKM": 36415603,
                    "distanceMoon": 94,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2017 HG4)",
                    "size": 12,
                    "isDangerous": false,
                    "distanceKM": 2910729,
                    "distanceMoon": 7,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2019 AF13)",
                    "size": 74,
                    "isDangerous": false,
                    "distanceKM": 38978208,
                    "distanceMoon": 101,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2020 HM3)",
                    "size": 47,
                    "isDangerous": false,
                    "distanceKM": 53394532,
                    "distanceMoon": 138,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2021 GG2)",
                    "size": 27,
                    "isDangerous": false,
                    "distanceKM": 3687707,
                    "distanceMoon": 9,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2021 GW2)",
                    "size": 48,
                    "isDangerous": false,
                    "distanceKM": 7976870,
                    "distanceMoon": 20,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2021 GP3)",
                    "size": 63,
                    "isDangerous": false,
                    "distanceKM": 12662109,
                    "distanceMoon": 32,
                    "date": "2021-04-16"
                },
                {
                    "name": "(2021 GA7)",
                    "size": 103,
                    "isDangerous": false,
                    "distanceKM": 35981267,
                    "distanceMoon": 93,
                    "date": "2021-04-16"
                },
                {
                    "name": "154988 (2004 XN35)",
                    "size": 940,
                    "isDangerous": false,
                    "distanceKM": 42666954,
                    "distanceMoon": 110,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2004 HX53)",
                    "size": 81,
                    "isDangerous": false,
                    "distanceKM": 60088113,
                    "distanceMoon": 156,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2014 QN433)",
                    "size": 142,
                    "isDangerous": false,
                    "distanceKM": 24930646,
                    "distanceMoon": 64,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2018 HM2)",
                    "size": 78,
                    "isDangerous": false,
                    "distanceKM": 48938490,
                    "distanceMoon": 127,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2018 LV2)",
                    "size": 39,
                    "isDangerous": false,
                    "distanceKM": 31634099,
                    "distanceMoon": 82,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2019 GJ1)",
                    "size": 16,
                    "isDangerous": false,
                    "distanceKM": 15592112,
                    "distanceMoon": 40,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2020 UY1)",
                    "size": 27,
                    "isDangerous": false,
                    "distanceKM": 6135702,
                    "distanceMoon": 15,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2020 YH)",
                    "size": 167,
                    "isDangerous": false,
                    "distanceKM": 68580736,
                    "distanceMoon": 178,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2021 GQ2)",
                    "size": 51,
                    "isDangerous": false,
                    "distanceKM": 2934480,
                    "distanceMoon": 7,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2021 GX2)",
                    "size": 121,
                    "isDangerous": false,
                    "distanceKM": 9928097,
                    "distanceMoon": 25,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2021 GE6)",
                    "size": 7,
                    "isDangerous": false,
                    "distanceKM": 1114566,
                    "distanceMoon": 2,
                    "date": "2021-04-15"
                },
                {
                    "name": "(2021 GL7)",
                    "size": 68,
                    "isDangerous": false,
                    "distanceKM": 16043374,
                    "distanceMoon": 41,
                    "date": "2021-04-15"
                },
                {
                    "name": "153195 (2000 WB1)",
                    "size": 1360,
                    "isDangerous": false,
                    "distanceKM": 54958832,
                    "distanceMoon": 142,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2007 TE66)",
                    "size": 205,
                    "isDangerous": false,
                    "distanceKM": 24309960,
                    "distanceMoon": 63,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2010 KC)",
                    "size": 65,
                    "isDangerous": false,
                    "distanceKM": 38043514,
                    "distanceMoon": 98,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2011 UT20)",
                    "size": 341,
                    "isDangerous": true,
                    "distanceKM": 40396651,
                    "distanceMoon": 105,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2013 HL11)",
                    "size": 94,
                    "isDangerous": false,
                    "distanceKM": 49927239,
                    "distanceMoon": 129,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2013 LL31)",
                    "size": 357,
                    "isDangerous": false,
                    "distanceKM": 56706620,
                    "distanceMoon": 147,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2015 DJ215)",
                    "size": 71,
                    "isDangerous": false,
                    "distanceKM": 8750067,
                    "distanceMoon": 22,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2015 VM64)",
                    "size": 25,
                    "isDangerous": false,
                    "distanceKM": 31841647,
                    "distanceMoon": 82,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2017 WY14)",
                    "size": 171,
                    "isDangerous": false,
                    "distanceKM": 23570359,
                    "distanceMoon": 61,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2018 VM1)",
                    "size": 34,
                    "isDangerous": false,
                    "distanceKM": 60052981,
                    "distanceMoon": 156,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2019 FA1)",
                    "size": 56,
                    "isDangerous": false,
                    "distanceKM": 70624829,
                    "distanceMoon": 183,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2019 SX)",
                    "size": 5,
                    "isDangerous": false,
                    "distanceKM": 26464157,
                    "distanceMoon": 68,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2019 VZ4)",
                    "size": 85,
                    "isDangerous": false,
                    "distanceKM": 43755617,
                    "distanceMoon": 113,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2020 HO5)",
                    "size": 8,
                    "isDangerous": false,
                    "distanceKM": 6333636,
                    "distanceMoon": 16,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2020 XL1)",
                    "size": 8,
                    "isDangerous": false,
                    "distanceKM": 29437366,
                    "distanceMoon": 76,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2021 GD6)",
                    "size": 43,
                    "isDangerous": false,
                    "distanceKM": 10839400,
                    "distanceMoon": 28,
                    "date": "2021-04-22"
                },
                {
                    "name": "(2021 GA9)",
                    "size": 165,
                    "isDangerous": false,
                    "distanceKM": 62565194,
                    "distanceMoon": 162,
                    "date": "2021-04-22"
                },
                {
                    "name": "417949 (2007 TB23)",
                    "size": 782,
                    "isDangerous": true,
                    "distanceKM": 33402476,
                    "distanceMoon": 86,
                    "date": "2021-04-21"
                },
                {
                    "name": "474179 (1999 VS6)",
                    "size": 650,
                    "isDangerous": false,
                    "distanceKM": 35578237,
                    "distanceMoon": 92,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2009 BD77)",
                    "size": 341,
                    "isDangerous": false,
                    "distanceKM": 62096278,
                    "distanceMoon": 161,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2012 RJ15)",
                    "size": 81,
                    "isDangerous": false,
                    "distanceKM": 67318403,
                    "distanceMoon": 175,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2013 GF23)",
                    "size": 78,
                    "isDangerous": false,
                    "distanceKM": 45494734,
                    "distanceMoon": 118,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2014 UX34)",
                    "size": 156,
                    "isDangerous": false,
                    "distanceKM": 18364599,
                    "distanceMoon": 47,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2016 VP2)",
                    "size": 78,
                    "isDangerous": false,
                    "distanceKM": 60309593,
                    "distanceMoon": 156,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2017 VY13)",
                    "size": 22,
                    "isDangerous": false,
                    "distanceKM": 13370527,
                    "distanceMoon": 34,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2019 YC2)",
                    "size": 18,
                    "isDangerous": false,
                    "distanceKM": 43141003,
                    "distanceMoon": 112,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2020 TW6)",
                    "size": 32,
                    "isDangerous": false,
                    "distanceKM": 66628467,
                    "distanceMoon": 173,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2021 GD3)",
                    "size": 18,
                    "isDangerous": false,
                    "distanceKM": 4140330,
                    "distanceMoon": 10,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2021 GJ3)",
                    "size": 76,
                    "isDangerous": false,
                    "distanceKM": 1475710,
                    "distanceMoon": 3,
                    "date": "2021-04-21"
                },
                {
                    "name": "(2021 GK3)",
                    "size": 35,
                    "isDangerous": false,
                    "distanceKM": 9416644,
                    "distanceMoon": 24,
                    "date": "2021-04-21"
                },
                {
                    "name": "381906 (2010 CL19)",
                    "size": 1240,
                    "isDangerous": true,
                    "distanceKM": 35211572,
                    "distanceMoon": 91,
                    "date": "2021-04-20"
                },
                {
                    "name": "417816 (2007 FA)",
                    "size": 410,
                    "isDangerous": true,
                    "distanceKM": 43163698,
                    "distanceMoon": 112,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2000 WM63)",
                    "size": 450,
                    "isDangerous": false,
                    "distanceKM": 59114176,
                    "distanceMoon": 153,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2005 FA)",
                    "size": 39,
                    "isDangerous": false,
                    "distanceKM": 24036132,
                    "distanceMoon": 62,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2006 WB)",
                    "size": 118,
                    "isDangerous": false,
                    "distanceKM": 46003444,
                    "distanceMoon": 119,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2007 YS56)",
                    "size": 31,
                    "isDangerous": false,
                    "distanceKM": 49178415,
                    "distanceMoon": 127,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2012 RL15)",
                    "size": 59,
                    "isDangerous": false,
                    "distanceKM": 57069089,
                    "distanceMoon": 148,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2014 UC58)",
                    "size": 108,
                    "isDangerous": false,
                    "distanceKM": 63998235,
                    "distanceMoon": 166,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2016 JC6)",
                    "size": 236,
                    "isDangerous": true,
                    "distanceKM": 57894957,
                    "distanceMoon": 150,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2017 RB16)",
                    "size": 32,
                    "isDangerous": false,
                    "distanceKM": 18429790,
                    "distanceMoon": 47,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2017 YB1)",
                    "size": 17,
                    "isDangerous": false,
                    "distanceKM": 28658110,
                    "distanceMoon": 74,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2018 KU1)",
                    "size": 297,
                    "isDangerous": false,
                    "distanceKM": 38597531,
                    "distanceMoon": 100,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2019 HQ)",
                    "size": 24,
                    "isDangerous": false,
                    "distanceKM": 5662006,
                    "distanceMoon": 14,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2021 FZ1)",
                    "size": 257,
                    "isDangerous": false,
                    "distanceKM": 36807816,
                    "distanceMoon": 95,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2021 FJ3)",
                    "size": 89,
                    "isDangerous": false,
                    "distanceKM": 8728693,
                    "distanceMoon": 22,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2021 GS2)",
                    "size": 60,
                    "isDangerous": false,
                    "distanceKM": 11167640,
                    "distanceMoon": 29,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2021 GX7)",
                    "size": 18,
                    "isDangerous": false,
                    "distanceKM": 2485846,
                    "distanceMoon": 6,
                    "date": "2021-04-20"
                },
                {
                    "name": "(2003 YP17)",
                    "size": 636,
                    "isDangerous": false,
                    "distanceKM": 26358564,
                    "distanceMoon": 68,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2011 BA)",
                    "size": 418,
                    "isDangerous": false,
                    "distanceKM": 49331427,
                    "distanceMoon": 128,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2014 EC)",
                    "size": 9,
                    "isDangerous": false,
                    "distanceKM": 39103831,
                    "distanceMoon": 101,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2015 FD)",
                    "size": 20,
                    "isDangerous": false,
                    "distanceKM": 21533456,
                    "distanceMoon": 55,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2015 QG)",
                    "size": 74,
                    "isDangerous": false,
                    "distanceKM": 68538657,
                    "distanceMoon": 178,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2016 PH38)",
                    "size": 326,
                    "isDangerous": false,
                    "distanceKM": 73616796,
                    "distanceMoon": 191,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2017 FE128)",
                    "size": 163,
                    "isDangerous": false,
                    "distanceKM": 52313746,
                    "distanceMoon": 136,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2018 VV6)",
                    "size": 18,
                    "isDangerous": false,
                    "distanceKM": 29895700,
                    "distanceMoon": 77,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2020 XR2)",
                    "size": 237,
                    "isDangerous": false,
                    "distanceKM": 63045906,
                    "distanceMoon": 163,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2021 CB4)",
                    "size": 314,
                    "isDangerous": false,
                    "distanceKM": 40333061,
                    "distanceMoon": 104,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2021 GL3)",
                    "size": 30,
                    "isDangerous": false,
                    "distanceKM": 3170201,
                    "distanceMoon": 8,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2021 GM3)",
                    "size": 8,
                    "isDangerous": false,
                    "distanceKM": 805420,
                    "distanceMoon": 2,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2021 GM5)",
                    "size": 63,
                    "isDangerous": false,
                    "distanceKM": 9756899,
                    "distanceMoon": 25,
                    "date": "2021-04-19"
                },
                {
                    "name": "(2021 GN9)",
                    "size": 95,
                    "isDangerous": false,
                    "distanceKM": 45731295,
                    "distanceMoon": 118,
                    "date": "2021-04-19"
                },
                {
                    "name": "303262 (2004 RJ84)",
                    "size": 804,
                    "isDangerous": false,
                    "distanceKM": 38783642,
                    "distanceMoon": 100,
                    "date": "2021-04-18"
                },
                {
                    "name": "527977 (2008 EY68)",
                    "size": 149,
                    "isDangerous": false,
                    "distanceKM": 45479513,
                    "distanceMoon": 118,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2013 RO5)",
                    "size": 47,
                    "isDangerous": false,
                    "distanceKM": 70299345,
                    "distanceMoon": 182,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2015 UA52)",
                    "size": 136,
                    "isDangerous": false,
                    "distanceKM": 42980088,
                    "distanceMoon": 111,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2016 JP15)",
                    "size": 247,
                    "isDangerous": false,
                    "distanceKM": 63875968,
                    "distanceMoon": 166,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2018 TT4)",
                    "size": 47,
                    "isDangerous": false,
                    "distanceKM": 64678765,
                    "distanceMoon": 168,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2019 HZ3)",
                    "size": 41,
                    "isDangerous": false,
                    "distanceKM": 25552636,
                    "distanceMoon": 66,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2020 BP8)",
                    "size": 34,
                    "isDangerous": false,
                    "distanceKM": 29663788,
                    "distanceMoon": 77,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2020 RT8)",
                    "size": 56,
                    "isDangerous": false,
                    "distanceKM": 54588411,
                    "distanceMoon": 141,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2020 UC)",
                    "size": 13,
                    "isDangerous": false,
                    "distanceKM": 59173161,
                    "distanceMoon": 153,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2020 UZ5)",
                    "size": 136,
                    "isDangerous": false,
                    "distanceKM": 40548380,
                    "distanceMoon": 105,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2021 DU)",
                    "size": 92,
                    "isDangerous": false,
                    "distanceKM": 27452807,
                    "distanceMoon": 71,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2021 ED5)",
                    "size": 429,
                    "isDangerous": true,
                    "distanceKM": 30756275,
                    "distanceMoon": 79,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2021 GC2)",
                    "size": 22,
                    "isDangerous": false,
                    "distanceKM": 11250321,
                    "distanceMoon": 29,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2021 GX3)",
                    "size": 16,
                    "isDangerous": false,
                    "distanceKM": 3572946,
                    "distanceMoon": 9,
                    "date": "2021-04-18"
                },
                {
                    "name": "(2021 GX5)",
                    "size": 396,
                    "isDangerous": false,
                    "distanceKM": 59598431,
                    "distanceMoon": 154,
                    "date": "2021-04-18"
                }
            ].sort((a, b) => new Date(a.date) - new Date(b.date))
        )
    }, []);


    function handleChangeOnlyDangerous() {
        setIsOnlyDangerous(!isOnlyDangerous);
    }


    return <Page>
        {
            params => (
                asteroids && <Main asteroids={asteroids} handleChangeOnlyDangerous={handleChangeOnlyDangerous}
                                   isOnlyDangerous={isOnlyDangerous} {...params}/>
            )

        }
    </Page>
}


function Main({asteroids, handleChangeOnlyDangerous, isOnlyDangerous, cart, changeCart}) {

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

    function getAsteroids() {
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
        <Settings handleChangeOnlyDangerous={handleChangeOnlyDangerous} distanceUnits={distanceUnits}
                  handleChangeDistanceUnits={handleChangeDistanceUnits}/>
        {
            getAsteroids().map(asteroid => <Asteroid asteroid={asteroid} distanceUnit={distanceUnits.find(item => item.active)} isInCart={cart.includes(asteroid.name)} changeCart={changeCart}/>)
        }
    </div>;
}

function Settings({handleChangeOnlyDangerous, distanceUnits, handleChangeDistanceUnits}) {

    function renderDistanceUnitLinks() {
        return distanceUnits.map((item, index) => {
            let linkActive = (item.active) ? 'link_active' : '';
            return <span key={index} className={'settings__change-distance'}><a className={'link ' + linkActive}
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