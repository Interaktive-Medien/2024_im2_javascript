function steuerrechner (monatslohn, steuerfuss) {
    // -> basis
    const freigrenze = 11000;
    const steuerprozent = 6;
    // -> jahreslohn abzüglich freigrenze
    let jahreslohn = monatslohn * 12;
    jahreslohn = jahreslohn - freigrenze;
    // -> berechnung
    let steuern = jahreslohn / 100 * steuerprozent;
    steuern = steuern / 100 * steuerfuss;
    steuern = Math.round(steuern);
    return `Du zahlst pro Jahr ${steuern}.- CHF Steuern.`;
}
const steuern = steuerrechner(6000, 114);
console.log(steuern)
