import { Games } from "./dados.js"

const body = document.querySelector("body")

let contador = 0

while(contador < Games.leght) {
  body.innerHTML += `<div>
        <h1>games</h1>
        <h2>nome</h2>
        <p>lançamento</p>
        <p>tema</p>
        <p>plataforma</p>
        <p>iade para jogar</p>
        <p>jamal joga?</p>
     </div>`
