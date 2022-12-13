import readline from "readline-sync";

const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];

const scriptNames = scripts.map((script) => script.name);

const chosenScript = readline.keyInSelect(scriptNames, "Escolha o script de conversão");

require(scripts[chosenScript].script);