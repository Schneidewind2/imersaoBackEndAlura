import express from "express";
// Importa o módulo Express, que é a base para criar aplicações web Node.js
import routes from "./src/routes/postRoutes.js";

const app = express();
app.use(express.static("uploads"));
// Cria uma instância do Express, que será nossa aplicação web
routes(app);
// Definição da ROTA que será usada pelo servidor (localhost / 127.0.0.1)
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

