## Descrição em Português 🌍

# Primeira API Node

Criei uma pequena API para o CRUD de carros. 

CRUD é um acrónimo para (criação, leitura, atualização e deleção de dados em um banco de dados).

Para isso usei as seguintes tecnologias: 

## Tecnologias 🛠️

- Node JS
- Express 
- MySQL

## Softwares utilizados 📱

A lista abaixo mostra os softwares necessários para poder fazer o bom uso da nossa API.

- Node (Development environment)
- MySQL (Sistema de gerenciamento de banco de dados)
- API TESTER - OPCIONAL (Por exemplo: HTTPie, Postman ou Insomnia)

Precisamos primeiro instalar o Node JS que podemos encontrar em https://nodejs.org/pt. 

E logo de seguida o MySQL que podemos encontrar em https://www.mysql.com/downloads/

E por fim um API tester, que é um app que permite testar as rotas da nossa API, pode ser baixado em https://httpie.io/ ou se não quiser uma boa opção é acessar o site do app em https://httpie.io/app.

## Dependências 🧑🏾‍💻

Para a criação dessa API, foram usadas as seguintes dependências:

- Express
- MySQL2
- Cors
- Nodemon - OPCIONAL

E você pode instalar elas navegando até o directório do projecto e digitando os seguintes comandos no terminal:
 
```bash
    npm i express mysql2 cors
```
```bash
    npm i nodemon -D
```

## Como usar a API 💭

Por fim para usar basta fazer algumas últimas configurações, como criar o arquivo .env no directório raiz do projecto edita-ló com as suas configurações. Por exemplo:

```.env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=db_api_carros
```
Criar a base de dados "db_api_carros" e a tabela "tb_carros", usando o seguinte comando SQL:

```sql
    CREATE DATABASE IF NOT EXISTS db_api_carros;

    create table tb_carros (
	    codigo int primary key auto_increment,
        modelo varchar(30),
        placa varchar(7)
    );
```

E por por último passo, digitar o seguinte comando no terminal, no directório do projecto:

```bash
    npm start
```

Agora sim finalmente pode testar a API, podendo primeira fazer uma requisição para:

```bash
    GET - http://localhost:3000/api/carros
```

## Description in English 🌍

# First Node API

I created a small API for car CRUD.

CRUD is an acronym for (creating, reading, updating, and deleting data in a database).

For this I used the following technologies:

## Technologies 🛠️

- Node JS
- Express
- MySQL

## Software used 📱

The list below shows the software needed to make good use of our API.

- Node (development environment)
- MySQL (Database Management System)
- API TESTER - OPTIONAL (For example: HTTPie, Postman or Insomnia)

First we need to install Node JS which we can find at https://nodejs.org/en.

And then MySQL, which we can find at https://www.mysql.com/downloads/

And finally, an API tester, which is an application that allows you to test our API routes, can be downloaded from https://httpie.io/ or if you don't want to, a good option is to go to the application website at https://httpie.io/app.

## Dependencies 🧑🏾‍💻

To create this API, the following dependencies were used:

- Express
- MySQL2
- Cors
- Nodemon - OPTIONAL

And you can install them by navigating to the project directory and typing the following commands in the terminal:

```bash
    npm i express mysql2 cors
```
```bash
    npm i nodemon -D
```

## How to use the API 💭

Finally, to use it, just do some final configuration, such as creating the .env file in the project root directory and editing it with your settings. For example:

```.env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=db_api_carros
```
Create the database "db_api_carros" and the table "tb_carros", using the following SQL command:

```sql
    CREATE DATABASE IF NOT EXISTS db_api_cars;

    create table tb_carros (
    code int primary key auto_increment,
    model varchar(30),
    varchar(7) board
    );
```

And lastly, type the following command in the terminal, in the project directory:

```bash
    npm start
```

Now you can finally test the API, first making a request to:

```bash
    GET - http://localhost:3000/api/carros
```

## 🔗 Links

[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/antonioamandio)

[![instagram](https://img.shields.io/badge/instagram-darkred?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/antonio__amandio/)