import mongoose from "mongoose";

let isConnected = false 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not  founr')
    if (isConnected) return console.log('already connected')

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected = true
        console.log('connected to db')
    } catch(e) {
        console.log(e)
    
    }
}