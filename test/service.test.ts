import { describe, it, expect } from 'vitest';
import * as service from '../src/services.js';

describe("Usuários Service", () => {
    it("Deve retornar todos os usuários", () => {
        const usuarios = service.getAll();
        expect(usuarios).toHaveLength(3);
    });
    it("Deve retornar um usuário pelo ID", () => {
        const usuario = service.getById(1);
        expect(usuario).toBeDefined();
        expect(usuario?.nome).toBe("José");
    });
    it("Não deve retornar um usuário que não existe", () => {
        const usuario = service.getById(4);
        expect(usuario).toBeUndefined();
    });
});