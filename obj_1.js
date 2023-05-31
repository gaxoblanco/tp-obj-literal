const zombie = {
    body: "podrido",
    dead_time: 7,
    human_kill: 2,

    run: function (s) {
        console.log(`Zombie corre por seg ${s}s`);
    },
    eat: function () {
        console.log("Zombie come presa");
    },
    sleep: function (hs) {
        console.log(`Zombie duerme por ${hs}hs`);
    }
}

console.log(`El cuerpo del zombie esta ${zombie.body}`);
console.log(`El zombie se murio hacer ${zombie.dead_time} meses`);
console.log(`El zombie mato a ${zombie.human_kill} humanos`);

zombie.run(10);
zombie.eat();
zombie.sleep(5);

console.log("---------------------------");