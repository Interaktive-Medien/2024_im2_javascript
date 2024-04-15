/*
* 04.e - Steuerrechner
* Du bist Fachperson für Steuern und möchtest deinen Kunden ein
* Onlinetool anbieten, mit welchem Sie berechnen können, wie viel
* Steuern Sie bezahlen. Unter diesem Link
* (https://blog.findea.ch/de-steuern/wie-wird-die-einkommenssteuer-berechnet)
* findest du anhand des Kantons St. Gallen ein Beispiel, wie Steuern
* berechnet werden. Versuche das, was du aus diesem Beispiel herauslesen kannst,
* in eine Funktion umzuwandeln, die zurückgibt, wie viel Einkommenssteuern
* man im Jahr bezahlen muss bei einem bestimmten Einkommen.
*
* Arbeite, wenn du willst, auch gerne mit AI/KI Tools.
* Und plane die Funktion zuerst schriftlich, bevor du sie
* versuchst in Code umzusetzen.
* */

// Progression
const step_1 = 11000;
const step_2 = 4000;
const step_2_percent = 4;
const step_3 = 17000;
const step_3_percent = 6;
const step_4 = 25000;
const step_4_percent = 8;
const step_5 = 36000;
const step_5_percent = 9.2;
const step_6_percent = 9.4;
const step_x_percent = 8.5;

// Steuerfuss
const steuerfuss_percent = 144;

function taxes_per_year(income) {
    let taxes_before_steuerfuss = 0;
    if (income > 250000) {
        taxes_before_steuerfuss = income / 100 * step_x_percent;
    } else {
        const steps_1_to_5 = step_1 + step_2 + step_3 + step_4 + step_5;
        if (income > steps_1_to_5) {
            taxes_before_steuerfuss += (income - steps_1_to_5) / 100 * step_6_percent;
            income = steps_1_to_5;
        }
        const steps_1_to_4 = step_1 + step_2 + step_3 + step_4;
        if (income > steps_1_to_4) {
            taxes_before_steuerfuss += (income - steps_1_to_4) / 100 * step_5_percent;
            income = steps_1_to_4;
        }
        const steps_1_to_3 = step_1 + step_2 + step_3;
        if (income > steps_1_to_3) {
            taxes_before_steuerfuss += (income - steps_1_to_3) / 100 * step_4_percent;
            income = steps_1_to_3;
        }
        const steps_1_to_2 = step_1 + step_2;
        if (income > steps_1_to_2) {
            taxes_before_steuerfuss += (income - steps_1_to_2) / 100 * step_3_percent;
            income = steps_1_to_2;
        }
        if (income > step_1) {
            taxes_before_steuerfuss += (income - step_1) / 100 * step_2_percent;
        }
    }
    return Math.round( taxes_before_steuerfuss/ 100 * steuerfuss_percent);
}

const income_per_year = 20000;
console.log(`Du bezahlst ca. CHF ${taxes_per_year(income_per_year)} Gemeindesteuern pro Jahr.`)
