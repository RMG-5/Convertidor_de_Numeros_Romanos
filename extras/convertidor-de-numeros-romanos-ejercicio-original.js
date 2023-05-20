/* ********** ********** ********** ********** ********** ********** ********** */
// CONVERTIDOR DE NUMEROS ROMANOS JAVASCRIPT.
/* ********** ********** ********** ********** ********** ********** ********** */

const equInArRoma = {
  0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX",
  10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC",
  100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM",
  1000: "M", 2000: "MM", 3000: "MMM"
};

// Opcion N-1 (Original Versión I).
function convertirIndoArabigoRomano(numInAr) { 
  let numMat = [];
  let numRoma = [];
  if (numInAr <= 3999 && numInAr > 0) {
    let numTex = numInAr.toString();        
    for (let i = 0; i < numTex.length; i++) {
      numMat.push(numTex[i]);
    }
    if (numMat.length === 4) {            
      numMat[0] = numMat[0] + "000";
      numMat[1] = numMat[1] + "00";
      numMat[2] = numMat[2] + "0";            
      for (let i = 0; i < numMat.length; i++) {
        numRoma.push(equInArRoma[numMat[i]]);
      } 
      return numRoma.join("");
    }
    else if (numMat.length === 3) {
      numMat[0] = numMat[0] + "00";
      numMat[1] = numMat[1] + "0";
      for (let i = 0; i < numMat.length; i++) {
        numRoma.push(equInArRoma[numMat[i]]);
      } 
      return numRoma.join("");
    }
    else if (numMat.length === 2) {
      numMat[0] = numMat[0] + "0";
      for (let i = 0; i < numMat.length; i++) {
        numRoma.push(equInArRoma[numMat[i]]);
      } 
      return numRoma.join("");
      } else {
          for (let i = 0; i < numMat.length; i++) {
            numRoma.push(equInArRoma[numMat[i]]);
          } 
          return numRoma.join("");
        }
    } else {
        return "Por favor, introduce un número entre 1 y 3999."
      }    
}

console.log(convertirIndoArabigoRomano(1982));

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */

const eqInArRoma = {
    uni: { 0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX"}, 
    dec: { 0: "", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC"},
    cen: { 0: "", 1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM"},
    mil: { 1: "M", 2: "MM", 3: "MMM"}
};

// Opcion N-2 (Original Versión II).
function convertirIndoArabigoRomano1(numInAr) {
    let numTex = numInAr.toString();
    let numRoma = "";
    if (numInAr >= 1 && numInAr <= 9) {    
        numRoma = eqInArRoma.uni[numInAr];
        return numRoma;
    }
    else if (numInAr >= 10 && numInAr <= 99) {          
        numRoma = eqInArRoma.dec[numTex[0]] + eqInArRoma.uni[numTex[1]];
        return numRoma;
    }
    else if (numInAr >= 100 && numInAr <= 999) {        
        numRoma = eqInArRoma.cen[numTex[0]] + eqInArRoma.dec[numTex[1]] + 
            eqInArRoma.uni[numTex[2]];
        return numRoma;
    }
    else if (numInAr >= 1000 && numInAr <= 3999) {       
        numRoma = eqInArRoma.mil[numTex[0]] + eqInArRoma.cen[numTex[1]] + 
            eqInArRoma.dec[numTex[2]] + eqInArRoma.uni[numTex[3]];
        return numRoma;
    }
    else {
        return "Por favor, introduce un número entre 1 y 3999."
    }
}

console.log(convertirIndoArabigoRomano1(2508));

// Opcion N-3 (Versión II Mejorada)
function convertirIndoArabigoRomano2(numInAr) {
  let numTex = numInAr.toString();
  let numRoma = "";
  return numInAr >= 1 && numInAr <= 9 ? numRoma = eqInArRoma.uni[numInAr]
    : numInAr >= 10 && numInAr <= 99 ? numRoma = eqInArRoma.dec[numTex[0]] + 
      eqInArRoma.uni[numTex[1]]
    : numInAr >= 100 && numInAr <= 999 ? numRoma = eqInArRoma.cen[numTex[0]] + 
      eqInArRoma.dec[numTex[1]] + eqInArRoma.uni[numTex[2]]
    : numInAr >= 1000 && numInAr <= 3999 ? numRoma = eqInArRoma.mil[numTex[0]] + 
      eqInArRoma.cen[numTex[1]] + eqInArRoma.dec[numTex[2]] + eqInArRoma.uni[numTex[3]]
    : "Por favor, introduce un número entre 1 y 3999."
}

console.log(convertirIndoArabigoRomano2(3999));

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */