var earth = {
    name: 'Earth',
    radius: 1,
    index: 3,
    distance: 3,
    speed: 1674,
    z: 23,
    box: {
        width: 1
    },
    persianName: 'زمین',
    scale: 1
}
var moon = {
    name: 'Moon',
    radius: 1,
    index: 4,
    distance: 3.5,
    speed: 0,
    box: {
        width: 1
    },
    persianName: 'ماه',
    scale: 0.1655
}
var mercury = {
    name: 'Mercury',
    radius: 1,
    index: 1,
    distance: 1,
    speed: 108.3,
    z: 0,
    box: {
        width: 1
    },
    persianName: 'عطارد',
    scale: 0.3770
}
var venus = {
    name: 'Venus',
    radius: 1,
    index: 2,
    distance: 2,
    speed: 65.2,
    z: 177,
    box: {
        width: 1
    },
    persianName: 'زهره',
    scale: 0.9032
}
var mars = {
    name: 'Mars',
    radius: 1,
    index: 5,
    distance: 4,
    speed: 866,
    z: 25,
    box: {
        width: 1
    },
    persianName: 'مریخ',
    scale: 0.3895
}
var jupiter = {
    name: 'Jupiter',
    radius: 1,
    index: 6,
    distance: 17,
    speed: 40000,
    z: 3,
    box: {
        width: 1
    },
    persianName: 'مشتری',
    scale: 2.640
}
var saturn = {
    name: 'Saturn',
    radius: 0.7,
    index: 7,
    distance: 33,
    speed: 36840,
    z: 27,
    ring: {
        radius: 1
    },
    box: {
        width: 1.5
    },
    persianName: 'زحل',
    scale: 1.139
}
var uranus = {
    name: 'Uranus',
    radius: 1,
    index: 8,
    distance: 66,
    speed: -14894,
    z: 98,
    box: {
        width: 1
    },
    persianName: 'ارانوس',
    scale: 0.917
}
var neptune = {
    name: 'Neptune',
    radius: 1,
    index: 9,
    distance: 100,
    speed: 9719,
    z: 28,
    box: {
        width: 1
    },
    persianName: 'نپتون',
    scale: 1.148
}
var sun = {
    name: 'Sun',
    radius: 1,
    index: 0,
    star: true,
    distance: 0,
    speed: 216,
    z: 0,
    box: {
        width: 2
    },
    persianName: 'خورشید',
    scale: 27.90
}
var planets = [mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, sun]

export default planets