const banana = {
    cor: "amarelo",
    peso: "1kg",
    status: "conservada",
    tipo: {
        prata: "15,00",
        pacovan: "20,00",
        terra: "40,00",
        ouro: "500,00",
    },
}

console.log(banana);

console.log("\n")
console.log(banana.tipo);

console.log("\n")
delete banana.tipo.pacovan;
console.log(banana.tipo);

console.log("\n")
delete banana["tipo"]["prata"];
console.log(banana["tipo"]);

console.log("\n")
delete banana["tipo"];
console.log(banana);

