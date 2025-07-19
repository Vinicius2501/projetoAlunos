[PT-BR]

# ProjetoAlunos

Este repositório contém uma **API RESTful para gestão de alunos**, com cadastro de usuários e autenticação JWT via Bearer Token.

Trata-se de uma adaptação prática do **módulo 13** do curso _"Javascript e TypeScript - Full Stack (Node, Express, noSQL, React, Hooks, Redux, Design Patterns)"_, ministrado pelo excelente professor **Luiz Otávio Miranda**.

---

## Visão Geral

A aplicação implementa uma estrutura moderna de back-end com Express e Sequelize, utilizando boas práticas de autenticação, manipulação de arquivos, segurança e organização em camadas.

---

## Tecnologias Utilizadas

| Stack       | Tecnologia         |
|-------------|--------------------|
| Runtime     | Node.js            |
| Framework   | Express 5          |
| ORM         | Sequelize          |
| Banco       | MariaDB            |
| Auth        | JSON Web Token     |
| Criptografia| bcryptjs           |
| Upload      | multer             |
| Config .env | dotenv             |
| Linting     | ESLint + Airbnb    |
| Monitoramento | nodemon          |
| Transpiler  | sucrase            |

---

## Funcionalidades

- Cadastro de usuários
- Login com autenticação JWT
- Cadastro de alunos
- Upload de fotos dos alunos
- CRUD completo de usuários e alunos
- Proteção de rotas com token Bearer

---

## Instalação e Execução

1. Clone o repositório:
   git clone https://github.com/seuusuario/projetoalunos.git

2. Acesse o diretório do projeto:
    cd projetoalunos

3. Instale as dependências:
    npm install

4. Crie e configure o arquivo .env usando o exemplo .env como referência.

5. Execute o projeto:
    npm run dev

---

## Segurança

- Hash de senha com bcryptjs
- Autenticação via JWT (Bearer Token)
- Middleware de proteção de rotas
- Validação de entrada de dados

---

## Pré-requisitos
- Node.js >= 18
- Banco de dados MariaDB em execução
- Sequelize CLI configurado com as credenciais do .env

---

## Estrutura .env
DATABASE_HOST={Host do servidor}
DATABASE_PORT={Porta do servidor}
DATABASE_USERNAME={Usuário de acesso ao servidor}
DATABASE_PWD={Senha de acesso ao servidor}
DATABASE={Nome do banco de dados}
TOKEN_SECRET={Token para assinatura}
TOKEN_EXPIRATION={Tempo de expiração}

---
Projeto desenvolvido como parte dos estudos no curso de Full Stack com JS/TS.



---

[EN]

# ProjetoAlunos

This repository contains a **RESTful API for student management**, featuring user registration and JWT authentication via Bearer Token.

It is a practical adaptation of **Module 13** from the course _"JavaScript and TypeScript - Full Stack (Node, Express, noSQL, React, Hooks, Redux, Design Patterns)"_, taught by the excellent instructor **Luiz Otávio Miranda**.

---

## Overview

The application implements a modern back-end architecture using Express and Sequelize, applying best practices in authentication, file handling, security, and layered organization.

---

## Technologies Used

| Stack        | Technology         |
|--------------|--------------------|
| Runtime      | Node.js            |
| Framework    | Express 5          |
| ORM          | Sequelize          |
| Database     | MariaDB            |
| Auth         | JSON Web Token     |
| Encryption   | bcryptjs           |
| File Upload  | multer             |
| Env Config   | dotenv             |
| Linting      | ESLint + Airbnb    |
| Monitoring   | nodemon            |
| Transpiler   | sucrase            |

---

## Features

- User registration
- Login with JWT authentication
- Student registration
- Photo upload for students
- Full CRUD for users and students
- Route protection using Bearer token

---

## Installation & Execution

1. Clone the repository:
   git clone https://github.com/yourusername/projetoalunos.git

2. Navigate into the project directory:
    cd projetoalunos

3. Install dependencies:
    npm install

4. Create and configure the .env file using .env.example as reference.

5.Run the project:
    npm run dev

---

## Security
- Password hashing with bcryptjs
- JWT authentication (Bearer Token)
- Route protection middleware
- Input data validation

---

## Prerequisites
- Node.js >= 18
- MariaDB database up and running
- Sequelize CLI configured with .env credentials

## .env Structure
DATABASE_HOST={Database host}
DATABASE_PORT={Database port}
DATABASE_USERNAME={Database username}
DATABASE_PWD={Database password}
DATABASE={Database name}
TOKEN_SECRET={JWT secret key}
TOKEN_EXPIRATION={Token expiration time}

This project was developed as part of my studies in Full Stack JavaScript/TypeScript development.