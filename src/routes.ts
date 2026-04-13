import { Request, Response, Router } from "express";
import * as service from "./services.js";
import type { Usuario } from "./services.js";

export const router = Router();

router.get('/usuarios', (req: Request, res: Response) => {
    const usuarios: Usuario[] = service.getAll();
    res.json(usuarios);
});

router.get('/usuarios/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const usuario: Usuario | undefined = service.getById(id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});