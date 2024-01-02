import mongoose from "mongoose"


const adminSchema = mongoose.Schema({ 

        
        email: {
                type: String,
                required: true,
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
                required: true,
                unique: true
        },
        role: {
                type: String,
                required: true
        }

})
        
export default mongoose.model('administradores', adminSchema)