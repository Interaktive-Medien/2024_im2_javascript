const friends = [
    {
        name: 'Antonia',
        wohnort: 'Zürich',
        alter: 27,
        hobbies: ['Tanzen', 'Fussball', 'Ausgang'],
        gemeinsame_freunde: ['Zoe']
    },
    {
        name: 'Lena',
        wohnort: 'Winterthur',
        alter: 28,
        hobbies: ['Fussball', 'Joggen', 'Ausgang'],
        gemeinsame_freunde: ['Celia', 'David', 'Alice'],
    },
    {
        name: 'David',
        wohnort: 'Zürich',
        alter: 31,
        hobbies: ['Fussball', 'Musik', 'Brunchen', 'Politik'],
        gemeinsame_freunde: ['Lena', 'Celia'],
    },
    {
        name: 'Celia',
        wohnort: 'St. Gallen',
        alter: 28,
        hobbies: ['Fussball', 'Ausgang', 'Brunchen'],
        gemeinsame_freunde: ['Lena', 'David'],
    },
    {
        name: 'Tobias',
        wohnort: 'Winterthur',
        alter: 30,
        hobbies: ['Arbeit', 'Brunchen'],
        gemeinsame_freunde: []
    },
    {
        name: 'Zoe',
        wohnort: 'Zürich',
        alter: 25,
        hobbies: ['Arbeit', 'Joggen'],
        gemeinsame_freunde: ['Alice', 'Antonia']
    },
    {
        name: 'Alice',
        wohnort: 'St. Gallen',
        alter: 26,
        hobbies: ['Musik', 'Joggen', 'Arbeit'],
        gemeinsame_freunde: ['Zoe']
    }
];
const friendsCt = document.querySelector('#friends');
const filters = document.querySelectorAll('#filter>button');
