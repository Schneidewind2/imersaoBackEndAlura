import express from "express";
import multer from "multer";
import { gerarNovoPost, listarPosts, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // permitindo que a aplicação receba e processe dados em formato JSON
    app.use(express.json());

    app.use(cors(corsOptions))
    //rota para buscar todos os posts
    app.get("/posts", listarPosts);
    //rota para criar um post
    app.post("/posts", gerarNovoPost);
    //rota para postar imagem
    app.post("/upload", upload.single("img"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);

}

export default routes;
