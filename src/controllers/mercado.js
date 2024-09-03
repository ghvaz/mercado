const model = require("../models/mercado.js")

const db = [{id: 1, nome: "BIG",endereco: {
    cep: "84033-001",
    logradouro: "Rua José Sebastião Pereira",
    complemento: "",
    unidade: "",
    bairro: "Cará-cará",
    localidade: "Ponta Grossa",
    uf: "PR",
    estado: "Paraná",
    regiao: "Sul",
    ibge: "4119905",
    gia: "",
    ddd: "42",
    siafi: "7777"
    }
}];

const store = (body) => {
    const novo = model(body);
    if (novo) {
        db.push(novo);

        return 201;
    }

    return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
    const index = db.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id));

    if (index != -1 && novo) {
        db[index] = novo;
        return 200;
    }

    return 400;
};

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);

    if(index != -1) {
        db.splice(index, 1);
        return 200;
    }

    return 404;
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}