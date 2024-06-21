// se llama al dao con sus metodos, es una capa mas que esta entre el dao y el controllers 
//en los daos van ñas operaciones que se ralizan directamente en la base de datos los métodos del CRUD, LOS METODOS DE MONGOOSE 
//aca en el servicio llamamos a los métodos del daos y devolvemos sus respuestas 
//en el controllers manajamos el reques, los datos que nos llegan del usuario y el response que le devolvemos al usuario 

/* import ProductDBManager from '../daos/productDBManager.js';
const productDao = new ProductDBManager(); */

//para utilizar FS: la instancia de  la clase de FS se va a llamar del = q la inst de la clase de MDB
import {__dirname } from '../path.js';

import ProductsManager from '../daos/productFSManager.js'; //dao de FS productManager  

const productDao = new ProductsManager(`${__dirname}/data/products.json`);


export const getAll = async () =>{
    try {
        return await productDao.getAll();
    } catch (error) {
        throw new Error (error); 
    }
}

export const getById = async (id) =>{
    try {
        return await productDao.getById(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const create = async (obj) =>{
    try {
        return await productDao.create(obj);
    } catch (error) {
        throw new Error(error);
    }
}

export const update = async (obj, id) =>{
    try {
        return await productDao.update(obj, id)
    } catch (error) {
        throw new Error(error);
    }
}

//se utiliza remove y no delete .... 
export const remove = async (id) =>{
    try {
        return await productDao.delete(id); 
    } catch (error) {
        throw new Error(error);
    }
}






