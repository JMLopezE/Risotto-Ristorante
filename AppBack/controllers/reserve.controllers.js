import reserveSchema from "../models/reserve.js"

export const createReserve = async(Reserve) => {
  return await reserveSchema.create(Reserve)
};

export const getReserve = async () => {
  return await reserveSchema.find()
        }

export const deleteReserve = async (reserveId) => {
  return await reserveSchema.deleteOne({_name: reserveId})
    };

export const getReserveByID = async(reserveId) => {
  return await reserveSchema.findOne({_name: reserveId})
}



