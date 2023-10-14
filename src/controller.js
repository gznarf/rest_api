import {pool} from './database.js';

class PersonaController{

    async getAll(req, res){
        const  [result] = await pool.query('SELECT * FROM personas');
        res.json(result);
    }

    async add(req, res){
        const persona = req.body;
        const [result] = await pool.query(`INSERT INTO Personas(nombre, apellido, dni) VALUES(?,?,?)`, [persona.nombre, persona.apellido, persona.dni]);
        res.json({"ID Insertado": result.insertId});
    }

    async delete(req, res){
        const persona = req.body;
        const [result] = await pool.query(`DELETE FROM Personas WHERE id=(?)`, [persona.id]);
        res.json({"Registro Eliminado": result.affectedRows});
    }

    async update(req, res){
        const persona = req.body;
        const [result] = await pool.query(`UPDATE Personas SET nombre=(?), apellido=(?), dni=(?) WHERE id=(?)`, [persona.nombre, persona.apellido, persona.dni, persona.id]);
        res.json({"Registro Actualizado": result.changedRows});
    }
}

class LibroController{
    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async getOne(req, res){
        const libro = req.params.id;
        const [result] = await pool.query(`SELECT * FROM libros WHERE id=(?)`, [libro]);
        if (result.length <= 0) return res.status(404).json({ message : 'Libro no encontrado'})
        res.json(result[0]);
    }

    async add(req, res){
        const libro = req.body;
        const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, año_publicacion, isbn) VALUES(?,?,?,?,?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.isbn]);
        res.json({"ID Insertado": result.insertId});
    }

    async delete(req, res){
        const libro = req.body;
        const [result] = await pool.query(`DELETE FROM Libros WHERE id=(?)`, [libro.id]);
        res.json({"Registro eliminado": result.affectedRows});
    }

    async update(req, res){
        const libro = req.body;
        const [result] = await pool.query(`UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), isbn=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.isbn, libro.id]);
        res.json({"Registro actualizado": result.changedRows});
    }
}

export const persona = new PersonaController();
export const libro = new LibroController();