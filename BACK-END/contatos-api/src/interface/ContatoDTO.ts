export interface ContatoDTO {
  id_contato?: string, // ID do cliente (? indica que é opcional)
  nome_completo: string, // Nome do cliente
  telefone: number, // Email do cliente
  data_nascimento?: number; // Data de nascimento do cliente
  email?: string; // Email do cliente
  observacoes?: string; // Observações adicionais sobre o cliente
}