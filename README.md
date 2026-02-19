# Inventory System Frontend

Este repositório contém a interface web do sistema de controle de produtos, matérias-primas e sugestão de produção.  
Todo o código-fonte, componentes, variáveis e estruturas foram desenvolvidos **em inglês**, conforme solicitado no teste prático.

O frontend consome a API desenvolvida no projeto *Inventory System Backend*.

---

## 📌 Funcionalidades

### ✔ CRUD de Produtos
- Cadastro, edição, listagem e exclusão de produtos.
- Campos:
  - `name`
  - `price`

### ✔ CRUD de Matérias-Primas
- Cadastro, edição, listagem e exclusão de matérias-primas.
- Campos:
  - `name`
  - `quantityInStock`

### ✔ Associação Produto ↔ Matéria-Prima
- Permite associar matérias-primas a um produto.
- Define a quantidade necessária de cada matéria-prima para produzir o produto.
- Pode ser feito dentro da própria tela de produtos.

### ✔ Sugestão de Produção
- Exibe:
  - produtos que podem ser produzidos com o estoque atual
  - quantidade possível de produção
  - valor total gerado
- Prioriza produtos de maior valor, conforme exigido no teste.

---

## 🛠 Tecnologias Utilizadas

- **React**
- **JavaScript**
- **Vite**
- **Axios**
- **CSS responsivo**

---

## 📂 Estrutura do Projeto
inventory-system-frontend/ ├── src/ │   ├── components/ │   ├── pages/ │   ├── services/ │   ├── App.jsx │   └── main.jsx ├── public/ ├── package.json └── vite.config.j

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/Israel875/inventory-system-frontend.git

Instale as dependências: npm install

Configure a URL da API
No arquivo services/api.js (ou equivalente), ajuste a URL:
export const api = axios.create({
  baseURL: "http://localhost:8080"
});

Execute o projeto: npm run dev

🖥 Telas Disponíveis
🔹 Product Management
- Lista de produtos
- Formulário de cadastro
- Edição e exclusão
- Associação de matérias-primas ao produto
🔹 Raw Material Stock
- Lista de matérias-primas
- Cadastro, edição e exclusão
🔹 Production Suggestion
- Lista de produtos que podem ser produzidos
- Quantidade possível
- Valor total gerado

📱 Responsividade
Todas as telas foram desenvolvidas com layout responsivo, atendendo ao requisito RNF003.

📄 Observação
Este projeto foi desenvolvido como parte de um teste prático técnico, seguindo todos os requisitos funcionais e não funcionais solicitados.






