# 🕌 Esfiharia App - Cardápio Digital

Este é um projeto full-stack de um aplicativo de cardápio digital para uma esfiharia, permitindo que os usuários visualizem os produtos e um administrador gerencie o cardápio.

O projeto é dividido em duas partes principais:
- **`esfiharia-backend`**: O servidor back-end construído com Node.js, Express e MongoDB. Ele gerencia os dados dos produtos, categorias e lida com o upload de imagens.
- **`esfirraria`**: O aplicativo móvel construído com React Native e Expo, que consome a API do back-end para exibir o cardápio aos usuários.

---

## ✨ Funcionalidades

- **Visualização de Cardápio**: Usuários podem ver todos os produtos, separados por categorias (Salgadas, Doces, Bebidas, etc.).
- **Detalhes do Produto**: Visualização de nome, descrição, preço e imagem de cada item.
- **Gerenciamento de Produtos (via API)**:
    - Criar novos produtos com upload de imagem.
    - Listar todos os produtos.
- **Banco de Dados na Nuvem**: Utiliza MongoDB Atlas para persistência de dados.

---

## 🛠️ Tecnologias Utilizadas

#### Back-end
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação da API REST.
- **MongoDB**: Banco de dados NoSQL para armazenar os dados dos produtos.
- **Mongoose**: ODM para modelar e interagir com o MongoDB.
- **Multer**: Middleware para upload de arquivos (imagens dos produtos).
- **Dotenv**: Para gerenciamento de variáveis de ambiente.

#### Front-end
- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Plataforma e conjunto de ferramentas para facilitar o desenvolvimento e build com React Native.

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento localmente.

### Pré-requisitos

- **Node.js**: [Baixe e instale](https://nodejs.org/en/) (versão LTS recomendada).
- **MongoDB Atlas**: Crie uma [conta gratuita](https://www.mongodb.com/cloud/atlas/register) e configure um cluster.
- **Expo Go** (App no celular): Instale o app Expo Go na [App Store (iOS)](https://apps.apple.com/us/app/expo-go/id982107779) ou [Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent).

### 1. Configurando o Back-end (`esfiharia-backend`)

1.  **Navegue até a pasta do backend:**
    ```bash
    cd esfiharia-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo de variáveis de ambiente:**
    - Crie um arquivo chamado `.env` na raiz da pasta `esfiharia-backend`.
    - Dentro dele, adicione a sua string de conexão do MongoDB Atlas:
      ```
      MONGODB_URI=mongodb+srv://<user>:<password>@cluster-url/your-database-name?retryWrites=true&w=majority
      ```
    - Substitua os valores `<user>`, `<password>`, `cluster-url` e `your-database-name` pelos dados do seu cluster no Atlas.

4.  **Popule o banco de dados (Opcional):**
    - Para preencher o cardápio com os itens de exemplo, rode o script de *seeding*.
    ```bash
    node seed.js
    ```

5.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```
    - O servidor estará rodando em `http://localhost:3000`.

### 2. Configurando o Front-end (`esfirraria`)

1.  **Abra um novo terminal** e navegue até a pasta do frontend:
    ```bash
    cd esfirraria
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o IP da API:**
    - Para que o aplicativo no seu celular possa se comunicar com o servidor na sua máquina, você precisa usar o IP da sua máquina na rede local.
    - **Descubra seu IP:** No Windows, abra o `cmd` e digite `ipconfig`. Procure pelo "Endereço IPv4" da sua conexão Wi-Fi ou Ethernet.
    - **Altere no código:** Encontre o arquivo no frontend onde a URL da API é definida (por exemplo, em um arquivo de configuração da API ou diretamente em uma chamada `fetch`/`axios`) e substitua o endereço pelo seu.
      - Exemplo: `http://192.168.15.88:3000`

4.  **Inicie o ambiente de desenvolvimento do Expo:**
    ```bash
    npx expo start
    ```
    - Um QR Code aparecerá no terminal.

5.  **Abra o aplicativo:**
    - Abra o aplicativo **Expo Go** no seu celular e escaneie o QR Code do terminal.
    - O aplicativo da esfiharia será carregado no seu celular.

**Importante**: Seu computador (rodando o back-end) e seu celular (rodando o app) devem estar conectados na **mesma rede Wi-Fi**.

---

## 📝 Endpoints da API

O back-end expõe os seguintes endpoints principais:

- `GET /products`: Retorna uma lista de todos os produtos do cardápio.
- `POST /products`: Cria um novo produto. Requer um corpo `form-data` com os campos `name`, `description`, `price`, `category` e um arquivo de `image`.

