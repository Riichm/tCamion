import * as nombresServices from "../services/nombres.service.js"

export const getNombres = (req, res) => {
    nombresServices
        .getNombres()
        .then((result) => {
            res.status(200).json({
                message: "Nombres recuperados satisfactoriamente",
                data: result[0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};


export const getNombre = (req, res) => {
    const { id } = req.params;
    nombresServices
        .getNombre(id)
        .then((result) => {
            res.status(200).json({
                message: "Nombre recuperado satisfactoriamente",
                data: result[0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};


export const createNombre = (req, res) => {
    const chofer = req.body;
    nombresServices
    .createNombre(chofer)
    .then(() => {
        res.status(200).json({
            message: "Chofer creado satisfactoriamente",
            data: chofer 
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};



export const updateNombre = (req, res) => {
    const chofer = req.body;
    const { id } = req.params;
    nombresServices
    .updateNombre(id, chofer)
    .then(() => {
        res.status(200).json({
            message: "Chofer actualizado satisfactoriamente",
            data: chofer 
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const deleteNombre = (req, res) => {
    const { id } = req.params;
    nombresServices
    .deleteNombre(id)
    .then(() => {
        res.status(200).json({
            message: "Chofer eliminado satisfactoriamente"
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}; 