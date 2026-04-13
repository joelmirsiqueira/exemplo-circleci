export interface Usuario {
    id: number;
    nome: string;
    email: string;
}

// Simula o banco de dados
const usuarios: Usuario[] = [
    { id: 1, nome: "José", email:"jose@email.com" },
    { id: 2, nome: "Maria", email:"maria@email.com" },
    { id: 3, nome: "João", email:"joao@email.com" },
];
export const getAll = (): Usuario[] => {
    return usuarios;
}

export const getById = (id: number): Usuario | undefined => {
    return usuarios.find(usuario => usuario.id === id);
}