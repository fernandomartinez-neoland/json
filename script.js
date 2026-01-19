const json = {};
const propiedad = "color"

const balon_basket = {
    color: "naranja",
    peso: 1,
    materiales: ["goma", "metal", "hilo", { color: "rojo" }],
    json: { color: "rojo", peso: 3 }
}

const saludo = document.getElementById("saludo");
console.log(saludo.textContent);


console.log(balon_basket[propiedad])

