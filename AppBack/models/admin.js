import mongoose from "mongoose"


const adminSchema = mongoose.Schema({ 

        
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
        password: {
                type: String,
                require: true,
                unique: true
        }

})
        
export const adminModel = mongoose.model('user', adminSchema)