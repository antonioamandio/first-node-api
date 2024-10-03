const database = require('../database');

module.exports = {
     buscarTodos() {
        return new Promise((aceite, rejeitado) => {

            let queryCode = 'SELECT * FROM tb_carros;';

            database.query(queryCode, (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceite(results);
                }
            });
        });
    },

    buscarUm(codigo) {
        return new Promise((aceite, rejeitado) => {
            let queryCode = 'SELECT * FROM tb_carros WHERE codigo = ?;';

            database.query(queryCode, [codigo], (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceite(results);
                }  
            });
        });
    },

    inserir(modelo, placa) {
        return new Promise((aceite, rejeitado) => {
            let queryCode = 'INSERT INTO tb_carros (modelo, placa) VALUES (?, ?);';

            database.query(queryCode, [modelo, placa], (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceite(results);
                } 
            });
        });
    },

    alterar(codigo, modelo, placa) {
        return new Promise((aceite, rejeitado) => {
            let queryCode = 'UPDATE tb_carros SET modelo = ?, placa = ? WHERE codigo = ?;';

            database.query(queryCode, [modelo, placa, codigo], (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceite(results);
                } 
            });
        });
    },

    excluir(codigo) {
        return new Promise((aceite, rejeitado) => {
            let queryCode = 'DELETE FROM tb_carros WHERE codigo = ?';

            database.query(queryCode, [codigo], (error, results) => {
                if (error) {
                    rejeitado(error);
                } else {
                    aceite(results);
                }
            });
        });
    }
};