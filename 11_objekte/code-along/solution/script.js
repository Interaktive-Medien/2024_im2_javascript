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

[...filters].forEach(filter => {
    filter.addEventListener('click', function (e) {
        filterFriends(filter.getAttribute('id'))
    })
})

function filterFriends(id) {
    let filtered_friends = false;
    switch (id) {
        case 'all':
            filtered_friends = friends;
            break;
        case 'u30':
            filtered_friends = friends.filter(friend => friend.alter < 30);
            break;
        case 'soccer':
            filtered_friends = friends.filter(friend => friend.hobbies.includes('Fussball'));
            break;
        case 'lena':
            filtered_friends = friends.filter(friend => friend.gemeinsame_freunde.includes('Lena'));
            break;
        case 'winti':
            filtered_friends = friends.filter(friend => friend.wohnort === 'Winterthur');
            break;
        case 'a':
            filtered_friends = friends.filter(friend => friend.name[0] === 'A');
            break;
    }
    const names = filtered_friends.map(friend => friend.name);
    showFilteredFriends(names);
}

function showFilteredFriends(names) {
    friendsCt.innerHTML = '';
    names.forEach(name => {
        const item = document.createElement('p');
        item.innerText = name;
        friendsCt.appendChild(item);
    })
}
