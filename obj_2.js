const zapatilla = {
    color: "purpura con negro",
    size: 40,
    use_level: 80,

    untie: function () {
        console.log('la zapatilla se desata');
    },
    tie: function () {
        console.log("atar la zapatilla");
    },
    break: function () {
        console.log('la zapatilla se rompe');
    }
}

console.log(`El color de la zapatilla es ${zapatilla.color}`);
console.log(`El talle de la zapatilla es ${zapatilla.dead_time} arg`);
console.log(`las zapatillas estan gastadas en un ${zapatilla.use_level}%`);

zapatilla.untie();
zapatilla.tie();
zapatilla.break();

console.log("---------------------------");