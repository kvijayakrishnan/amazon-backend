

const mongoose = require("mongoose")


const db = async()=>{
    try {
        const connectDB = await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log(`db is connected successfully`);
        
    } catch (error) {
        console.log("Error while connecting DB", error);
    }
}



module.exports = db






