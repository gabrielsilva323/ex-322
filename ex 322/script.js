import { Games } from "./dados.js"

const body = document.querySelector("body")

let contador = 0

while(contador < Games.leght) {
  body.innerHTML += `<div>
        <h1>${Games[contador].nomeCompletoDoJogo}</h1>
        <p>lançamento:${Games[contador].Lançamento}</p>
        <p>>Gêneros:${Games[contador].Gêneros}</p>
        <p>plataforma:${Games[contador].Plataforma}</p>
        <p>idade para jogar:${Games[contador].IdadePraJogar}</p>
        <p>jamal joga?:${Games[contador].JamalJoga?}</p>
     </div>`
