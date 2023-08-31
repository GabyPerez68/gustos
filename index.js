
const naranja = {
  esFuerte() {
    return true
  }
}

const rojo = {
    esFuerte() {
    return true
  }
}

const verde = {
  esFuerte() {
    return true
  }
}

const celeste = {
  esFuerte() {
    return false
  }
}

const pardo = {
  esFuerte() {
    return false
  }
}



const cobre = {
  brilla() {
    return true
  }
}

const vidrio = {
  brilla() {
    return true
  }
}

const lino = {
  brilla() {
    return false
  }
}

const madera = {
  brilla() {
    return false
  }
}

const cuero = {
  brilla() {
    return false
  }
}


const cajita = {
peso : 400,
color : rojo,
material : cobre,
  pasarObjeto(cosa){
    this.peso = this.peso + cosa.peso
  }
}

const banquito = {
peso : 800,
color : naranja,
material : madera,
   colorBanquito(color){
  this.color = color
 }
}

const arito = {
peso : 180,
color : celeste,
material : cobre
}
const remera = {
peso : 800,
color : rojo,
material : lino
}
const pelota = {
peso : 1300,
color: pardo,
material: cuero 
}
const biblioteca = {
peso : 8000,
color : verde,
material : madera  
}

const muñeco = {
peso : undefined,
color : celeste,
material : vidrio, 
  pesoMuñeco(pesom){
    this.peso = pesom
  
  }
  
}
var placa = {
peso : undefined,
color :   undefined,
material : cobre,
 pesoPlaca(pesom){
    this.peso = pesom
  
  },
 colorPlaca(color){
    this.color = color
 }
}
const rosa = {
gustar: true,
 leGusta(cosadepeso) {
    return this.gustar && cosadepeso.peso <= 2000
  }
}



const estefania = {

  gustar: true,
  leGusta(cosacolorfuerte) {
  return (this.gustar && cosacolorfuerte.color && cosacolorfuerte.color.esFuerte()) == true;
}
  
}
const luisa = {
   gustar: true,
    leGusta(cosasbrillan) {
  return (this.gustar && cosasbrillan.material && cosasbrillan.material.brilla()) == true;
}
   
  
}
const juan = {

  gustar: true,
  leGusta(cosa) {
  return ((this.gustar && cosa.color && cosa.color.esFuerte()) == false) || (cosa.peso >= 1200 && cosa.peso <= 1800);
}
 
  
}

const bolichito = { 
  objetosVidriera: null,
  objetosMostrador: null,

  ponerEnVidriera(objeto) {
    this.objetosVidriera = objeto;
  },
  
  ponerEnMostrador(objeto) {
    this.objetosMostrador = objeto;
  },

  esBrillante() {
    return this.objetosVidriera.material.brilla()  && 
           this.objetosMostrador.material.brilla()
},  
  esMonocromatico() {
     
      return this.objetosVidriera && this.objetosMostrador && 
      this.objetosVidriera.color === this.objetosMostrador.color
     
  },
  estaDesequilibrado(){
  return this.objetosVidriera && this.objetosMostrador && 
  this.objetosMostrador.peso < this.objetosVidriera.peso
         
  },
tieneAlgoDeColor(color) {
    return (
      (this.objetosVidriera && this.objetosVidriera.color === color) ||
      (this.objetosMostrador && this.objetosMostrador.color === color)
    )
  },
puedeMejorar(){
return bolichito.estaDesequilibrado() || bolichito.esMonocromatico();
},


puedeOfrecerleAlgoA(persona) {
  return (
      (this.objetosVidriera && persona.leGusta(this.objetosVidriera)) ||
      (this.objetosMostrador && persona.leGusta(this.objetosMostrador))
    )
  }
  

}
placa.colorPlaca(rojo)
bolichito.ponerEnVidriera(remera);
bolichito.ponerEnMostrador(pelota);


console.log(`brillan los materiales?: ${bolichito.esBrillante()}`)
console.log(`es del mismo color?: ${bolichito.esMonocromatico()}`)
console.log(`le gusta a estefania?: ${estefania.leGusta(placa)}`)
console.log(`esta desequilibrado?: ${bolichito.estaDesequilibrado()}`)
console.log(`tiene algo de color indicado?: ${bolichito.tieneAlgoDeColor(estefania)}`)


console.log(`puede ofrecer ${bolichito.puedeOfrecerleAlgoA (luisa)}`)



