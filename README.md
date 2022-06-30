# React Avançado - Won Games API

Esta é a API para criar a Won Games Store do curso [React Avançado](https://reactavancado.com.br/).

## Requisitos

Este projeto usa [PostgreSQL](https://www.postgresql.org/), então, para que funcione, instale em sua máquina local ou use o Docker.

A configuração do Banco de Dados pode ser encontrada em [config/database.js](config/database.js)

## Development

After cloning this project, install the dependencies:

```
yarn install
```

And run using:

```
yarn develop
```

The urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

Na primeira vez que acessar o Admin, você precisará criar um usuário.

## Populate data

Este projeto usa uma rota `api/games/populate` para preencher os dados via site GoG.
Para que funcione, siga os passos:

- Vá para Roles & Permissions > Public e certifique-se de que a rota `game:populate` esteja disponível publicamente e o upload também
- Com o Strapi em execução, execute o seguinte comando no seu console:

```bash
$ curl -X POST http://localhost:1337/api/games/populate

# you can pass query parameters like:
$ curl -X POST http://localhost:1337/api/games/populate?page=2
$ curl -X POST http://localhost:1337/api/games/populate?search=simcity
$ curl -X POST http://localhost:1337/api/games/populate?sort=rating&price=free
$ curl -X POST http://localhost:1337/api/games/populate?availability=coming&sort=popularity
```

## Using dump

First of all, you need to download our [dump.sql](https://github.com/Won-Games/database/raw/master/dump.sql) from our [database repository](https://github.com/Won-Games/database).

1. Create a Postgres database and user:

```sh
CREATE USER wongames WITH ENCRYPTED PASSWORD 'wongames123';
CREATE DATABASE wongames OWNER wongames;
```

2. Populate the new database, using the following command (remember to point the place where you have the `dump.sql`):

```sh
psql -h localhost -p 5432 -U wongames wongames < dump.sql
```

And you can access `localhost:1337/admin` with the following credentials:

```sh
email: wongames@wongames.com
password: Wongames123
```
