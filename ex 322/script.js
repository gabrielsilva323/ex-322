import { Games } from "./dados.js"

const body = document.querySelector("body")

let contador = 0

while(contador < Games.length) {
  body.innerHTML +=` 
     <div class="quadrado">
        <h1>${Games[contador].nomeCompletoDoJogo}</h1>
        <p class="texto">lançamento:${Games[contador].Lançamento}</p>
        <p class="texto">Gêneros:${Games[contador].Gêneros}</p>
        <p class="texto">plataforma:${Games[contador].Plataforma}</p>
        <p class="texto">idade para jogar:${Games[contador].IdadePraJogar}</p>
        <p class="texto">Jamal joga?:${Games[contador].JamalJoga}</p>
     </div>
     `
contador++
}