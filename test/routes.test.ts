import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("API de Usuários", () => {
    it("Deve retornar todos os usuários", async () => {
        const response = await request(app).get("/usuarios");
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(3);
    });
    it("Deve retornar um usuário pelo ID", async () => {
        const response = await request(app).get("/usuarios/1");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("nome", "José");
    });
    it("Não deve retornar um usuário que não existe", async () => {
        const response = await request(app).get("/usuarios/4");
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("error", "Usuário não encontrado");
    });
});