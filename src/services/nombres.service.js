import db from "../config/db.js";

export const getNombres = () => {
    return new Promise((resolve, reject) => {

        const query = 'SELECT * FROM R26_Chofer';
        
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });

};

export const getNombre = (id) => {
    return new Promise((resolve, reject) => {

        const query = 'SELECT * FROM R26_Chofer WHERE id = ?';
        
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export const createNombre = (chofer) => {
    return new Promise((resolve, reject) => {

        const query = 'INSERT INTO R26_Chofer (nombre, apellidoPat, apellidoMat, fechaNac) VALUES (?, ?, ?, ?)';
        const {nombre, apellidoPat, apellidoMat, fechaNac} = chofer
        
        db.execute(query, [nombre, apellidoPat, apellidoMat, fechaNac])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export const updateNombre = (id, chofer) => {
    return new Promise((resolve, reject) => {

        const query = 'UPDATE R26_Chofer SET nombre = ?, apellidoPat = ?, apellidoMat = ?, fechaNac = ? WHERE id = ?';
        const {nombre, apellidoPat, apellidoMat, fechaNac} = chofer
        
        db.execute(query, [nombre, apellidoPat, apellidoMat, fechaNac, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export const deleteNombre = (id) => {
    return new Promise((resolve, reject) => {

        const query = 'DELETE FROM R26_Chofer WHERE id = ?';
        
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};