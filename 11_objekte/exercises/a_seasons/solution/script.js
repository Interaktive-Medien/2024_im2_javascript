/*
* 11.a - Seasons
* Du hast ein Objekt mit Jahreszeiten. Verändere
* und ergänze dieses nach den Angaben unten.
* */

const seasons = {
    spring: {
        name: 'Frühling',
        moths: ['März', 'April', 'Mai']
    },
    summer: {
        name: 'Sommer',
        moths: ['Juni', 'Juli', 'August']
    },
    autumn: {
        name: 'Herbst',
        moths: ['September', 'Oktober', 'November']
    },
    winter: {
        name: 'Winter',
        moths: ['Dezember', 'Januar', 'Februar']
    }
};

/*
* a.
* Füge jeder Jahreszeit eine neue Property 'holidays' hinzu
* und speichere dort in einem Array Feiertage, welche in dieser
* Jahreszeit stattfinden.
* */
seasons.spring.holidays = ['Tag der Arbeit', 'Auffahrt', 'Ostern'];
seasons.summer.holidays = ['Bundesfeiertag'];
seasons.autumn.holidays = ['Allerheiligen'];
seasons.winter.holidays = ['Weihnachten', 'Silvester'];
console.log('Seasons nach a:', seasons)

/*
* b.
* Füge eine weitere, erfundene Jahreszeit hinzu.
* */
seasons.code = {
    name: 'Code-Jahreszeit',
    months: ['Java', 'Script'],
    holidays: ['Frei']
}
console.log('Seasons nach b:', seasons)

/*
* c.
* Benenne den Winter in "kalt" um.
* */
seasons.winter.name = 'kalt';
console.log('Seasons nach c:', seasons)
