const CarroService = require('../services/CarroService');

module.exports = {
    async buscarTodos(req, res) {
        let json = { error: '', result: [] };

        let carros = await CarroService.buscarTodos();

        carros.map(carro => {
            json.result.push({
                codigo: carro.codigo,
                marca: carro.modelo,
                placa: carro.placa
            });
        })

        return res.json(json);
    },

    async buscarUm(req, res) {
        let json = { error: '', result: [] };

        let carro = await CarroService.buscarUm(req.params.codigo);

        if (carro) {
            json.result = carro;
        }

        res.json(json);
    },

    async inserir(req, res) {
        let json = { error: '', result: [] };

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa) {
            await CarroService.inserir(modelo, placa);

            json.result = {
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não informados... Por favor, tente novemente!';
        }

        res.json(json);
    },

    async alterar(req, res) {
        let json = { error: '', result: [] };

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (codigo && modelo && placa) {
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não informados... Por favor, tente novemente!';
        }

        res.json(json);
    },

    async excluir(req, res) {
        let json = { error: '', result: [] };

        await CarroService.excluir(req.params.codigo);

        res.json(json);
    }
}