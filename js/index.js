/* ********** ********** ********** ********** ********** ********** ********** */
// SCRIPT "CONVERTIDOR DE NUMEROS ROMANOS"
/* ********** ********** ********** ********** ********** ********** ********** */

const numeroQueSeRevisa = document.querySelector("input[type='number']");
const convertirNumero = document.querySelector("#convertir-numero");
const numeroRomano = document.querySelector("#numero-romano");

const resetearCampos = document.querySelector(".resetear-campos");

const equivalencia = {
    uni: { 0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX" }, 
    dec: { 0: "", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC" },
    cen: { 0: "", 1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM" },
    mil: { 1: "M", 2: "MM", 3: "MMM" }
};

const convertirNumeroEnRomano = () => {
    return numeroQueSeRevisa.value >= 1 && numeroQueSeRevisa.value <= 9
        ? (numeroRomano.textContent = equivalencia.uni[numeroQueSeRevisa.value[0]])
        : numeroQueSeRevisa.value >= 10 && numeroQueSeRevisa.value <= 99
        ? (numeroRomano.textContent =
            equivalencia.dec[numeroQueSeRevisa.value[0]] +
            equivalencia.uni[numeroQueSeRevisa.value[1]])
        : numeroQueSeRevisa.value >= 100 && numeroQueSeRevisa.value <= 999
        ? (numeroRomano.textContent =
            equivalencia.cen[numeroQueSeRevisa.value[0]] +
            equivalencia.dec[numeroQueSeRevisa.value[1]] +
            equivalencia.uni[numeroQueSeRevisa.value[2]])
        : numeroQueSeRevisa.value >= 1000 && numeroQueSeRevisa.value <= 3999
        ? (numeroRomano.textContent =
            equivalencia.mil[numeroQueSeRevisa.value[0]] +
            equivalencia.cen[numeroQueSeRevisa.value[1]] +
            equivalencia.dec[numeroQueSeRevisa.value[2]] +
            equivalencia.uni[numeroQueSeRevisa.value[3]])
        : (numeroRomano.textContent =
            "Por favor, escribe un número entre 1 y 3999.");
};
convertirNumero.addEventListener("click", convertirNumeroEnRomano);
  
resetearCampos.addEventListener("click", function () {
    numeroQueSeRevisa.value = "";
    numeroRomano.textContent = "";
});

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */