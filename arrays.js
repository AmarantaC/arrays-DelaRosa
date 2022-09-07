
let dia = parseInt(prompt("Ingrese su dia de nacimiento: "));
let mes = prompt("Ingrese su mes de nacimiento: ");

class Signo {
    constructor(nombre, diaInicio, diasMes, mesInicio, diaFin, mesFin ){
        this.nombre = nombre;
        this.diaInicio = diaInicio;
        this.diasMes = diasMes;
        this.mesInicio = mesInicio;    
        this.diaFin = diaFin;
        this.mesFin = mesFin;       
    }
};

const aries = new Signo ("Aries", 21, 31, "marzo", 19, "abril");
const tauro = new Signo ("Tauro", 20, 30, "abril", 20, "mayo");
const geminis = new Signo ("Geminis", 21, 31, "mayo", 20, "junio");
const cancer = new Signo ("Cancer", 21, 30, "junio", 22, "julio");
const leo = new Signo ("Leo", 23, 31, "julio", 20, "agosto");
const virgo = new Signo ("Virgo", 23, 31, "agosto", 22, "septiembre");
const libra = new Signo ("Libra", 23, 30, "septiembre", 22, "octubre");
const escorpio = new Signo ("Escorpio", 23, 31, "octubre", 21, "noviembre");
const sagitario = new Signo ("Sagitario", 22, 30, "noviembre", 21, "diciembre");
const capricornio = new Signo ("Capricornio", 22, 31, "diciembre", 20, "enero");
const acuario = new Signo ("Acuario", 21, 31, "enero", 19, "febrero");
const picis = new Signo ("Picis", 20, 29, "febrero", 20, "marzo");

const signos = [];
signos.push(aries);
signos.push(tauro);
signos.push(geminis);
signos.push(cancer);
signos.push(leo);
signos.push(virgo);
signos.push(libra);
signos.push(escorpio);
signos.push(sagitario);
signos.push(capricornio);
signos.push(acuario);
signos.push(picis);

function horoscopo (signos) {
    for ( let Signo of signos) {
        if (((dia >= Signo.diaInicio )&&( dia <= Signo.diasMes) && (mes == Signo.mesInicio))||
        ((dia >= 1 )&&( dia <= Signo.diaFin) && (mes == Signo.mesFin))){
            alert(Signo.nombre + " te va a ir muy mal este año")
        
        } 
        
    }
};

horoscopo(signos);


 