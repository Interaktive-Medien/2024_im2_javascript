// -> colors
let colors = [
    [
        '#AFAEEE',
        '#BDE4A8',
        '#FF3E41'
    ],
    [
        '#474044',
        '#FBD1A2',
        '#F61067'
    ],
    [
        '#FF3E41',
        '#FCFC62',
        '#DBCBD8'
    ],
    [
        '#F5D547',
        '#7765E3',
        '#1E2EDE'
    ],
    [
        '#EEE3AB',
        '#E05D3A',
        '#111D13'
    ]
];

// -> controls
const controls = document.querySelector('#controls');
const color_pack = controls.querySelector('#range');
const color_bg = controls.querySelector('#colorBg');
const color_inner = controls.querySelector('#colorInner');
const color_outer = controls.querySelector('#colorOuter');

// -> set color function
function setStyle (name, value) {
    document.documentElement.style.setProperty(`--${name}`, value);
}

// -> program
function setColorScheme (id) {
    setStyle('color-bg', colors[id][0]);
    setStyle('color-inner', colors[id][1]);
    setStyle('color-outer', colors[id][2]);
    color_bg.value = colors[id][0];
    color_inner.value = colors[id][1];
    color_outer.value = colors[id][2];
}
setColorScheme(0);

color_pack.addEventListener('input', function (e) {
    const value = parseInt(e.target.value);
    setColorScheme(value);
})
color_bg.addEventListener('input', function (e) {
    const current_pack = parseInt(color_pack.value);
    colors[current_pack][0] = e.target.value;
    setColorScheme(current_pack);
})
color_inner.addEventListener('input', function (e) {
    const current_pack = parseInt(color_pack.value);
    colors[current_pack][1] = e.target.value;
    setColorScheme(current_pack);
})
color_outer.addEventListener('input', function (e) {
    const current_pack = parseInt(color_pack.value);
    colors[current_pack][2] = e.target.value;
    setColorScheme(current_pack);
})
