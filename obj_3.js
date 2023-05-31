const conejo = {
    name: "The boss Rabbit",
    color: "negro",
    peso: 3,
    level: 80,
    life: 99999,

    patada: function () {
        console.log('The boss Rabbit uso patada, el jugador pierde 10p');
    },
    aplastada: function () {
        console.log('The boss Rabbit uso aplastada, el jugador pierde 50p');
    },
    correr: function () {
        console.log('The boss Rabbit uso correr, el jugador queda a salvo');
    }
}

console.log(`El conojo se llama ${conejo.name}`);
console.log(`Es de color ${conejo.color}, level ${conejo.level}, pesa ${conejo.peso} y es su vida es de ${conejo.life}-hp`);

conejo.patada();
conejo.aplastada();
conejo.correr();

console.log("---------------------------");