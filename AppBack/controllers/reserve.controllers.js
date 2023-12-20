import {  reserveModel } from "../models/reserve.js";


export const createReserve = async (request, response) => {
  try {
    let body = request.body;

    let newReserve = await reserveModel.create(body);

    response.json(newReserve);
  } catch (e) {
    console.log(e);
    response.json(e);
  }
};

export const getReserve = async (request, response) => {
        try {
            let reserve = await reserveModel.find()
            response.json(reserve)
        } catch (e) {
            console.log(e)
            response.json(e)
        }
    };

export const deleteReserve = async (request, response) => {
        try {
            let idForDelete = request.params.id
            let reserve = await reserveModel.findOneAndDelete({ _id: idForDelete })
            response.json(reserve)
        } catch (e) {
            console.log(e)
            response.json(e)
        }
    };





