import mongoose from "mongoose"


const reserveSchema = mongoose.Schema({ 

        
        email: {
                type: String,
                required: true,
                unique: true
                },
        name: {
                type: String,
                required: true
                },
        last_name: {
                type: String,
                required: true
                },
        phone: {
                type: Number,
                required: true
                },
        number_people: {
                type:Number,
                required: true
                },
        special_occasions: {
                type:String,
                required: true
                },
        date_reserve:{
                type:Number,
                required:true
                },
        hour_reserve:{
                type:Number,
                required:true
                }
})
        
export const reserveModel = mongoose.model('reserve', reserveSchema);

