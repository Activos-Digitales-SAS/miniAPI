const express = require("express");
const cors = require("cors");
const server = express();

// Configuracon de CORS para permitir solicitudes
server.use(cors());


const preguntasFrecuentes = [
    {
        id: 0,
        pregunta: "¿Qué es una plataforma de intercambio de activos digitales?",
        respuesta: "Una plataforma de intercambio de activos digitales, también conocida como exchange de criptomonedas, es una plataforma en línea que permite a los usuarios comprar, vender y negociar una variedad de activos digitales, como criptomonedas y tokens digitales. Estas plataformas actúan como intermediarios facilitando las transacciones entre compradores y vendedores, proporcionando un lugar seguro y confiable para llevar a cabo operaciones financieras en el mercado de criptomonedas."
    },
    {
        id: 1,
        pregunta: "¿Cómo funcionan las plataformas de intercambio de criptomonedas?",
        respuesta: {
            registroVerificacion: "Los usuarios deben crear una cuenta en la plataforma y, en la mayoría de los casos, pasar por un proceso de verificación de identidad (KYC, Know Your Customer).",
            depositoDeFondos: "Los usuarios depositan fondos en su cuenta del exchange. Estos fondos pueden ser en moneda fiduciaria (USD, EUR, etc.) o en criptomonedas.",
            intercambio: "Los usuarios realizan intercambio entre las diferentes criptomonedas que ofrece la plataforma.",
            retiroDeFondos: "Los usuarios pueden retirar sus fondos de la plataforma en cualquier momento en horario laboral, transfiriéndolos a sus propias billeteras de criptomonedas o a cuentas bancarias."
        }
    },
    {
        id: 2,
        pregunta: "¿Cuáles criptomonedas puedo intercambiar en la plataforma?",
        respuesta: "BTC, USDT, ETH, COPW"
    },
    {
        id: 3,
        pregunta: "¿Cuáles son los requisitos para registrarme en la plataforma?",
        respuesta: "Cédula, o pasaporte, Número de Celular y un Correo electrónico"
    }
];



server.get("/preguntas", (req,res)=>{
    res.json(preguntasFrecuentes)
})


server.listen(3001, ()=>{
console.log("servidor corriendo en el puerte 3001")
})