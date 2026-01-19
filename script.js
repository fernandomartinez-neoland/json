const json = {};
const propiedad = "color"

const balon_basket = {
    color: "naranja",
    peso: 1,
    materiales: ["goma", "metal", "hilo", { color: "azul" }],
    json: { color: "rojo", peso: 3 }
}

const saludo = document.getElementById("saludo");
console.log(saludo.textContent);


console.log(balon_basket[propiedad])

console.log(balon_basket.materiales[3].color)