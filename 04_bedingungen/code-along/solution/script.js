function steuerrechner (monatslohn, steuerfuss, monatlich = false) {
    // -> basis
    const freigrenze = 11000;
    const steuerprozent = 6;
    // -> jahreslohn abzüglich freigrenze
    let jahreslohn = monatslohn * 12;
    if (jahreslohn < freigrenze) {
        return `Du verdienst zu wenig, um Steuern zahlen zu müssen.`
    }
    jahreslohn = jahreslohn - freigrenze;
    // -> berechnung
    let einheit = 'Jahr'; // let einheit = monatlich ? 'Monat' : 'Jahr'
    let steuern = jahreslohn / 100 * steuerprozent;
    steuern = steuern / 100 * steuerfuss;
    steuern = Math.round(steuern); // steuern = monatlich ? Math.round(steuern / 12) : Math.round(steuern)
    if (monatlich) {
        steuern = Math.round(steuern / 12);
        einheit = 'Monat'
    }
    return `Du zahlst pro ${einheit} ${steuern}.- CHF Steuern.`;
}
const steuern = steuerrechner(6000, 114);
const steuern_monatlich = steuerrechner(6000, 114, true);
console.log(steuern)
console.log(steuern_monatlich)
