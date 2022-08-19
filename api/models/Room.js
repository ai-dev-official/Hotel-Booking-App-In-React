import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{number:Number,unavailableDates:{type:[Date]}}],

}, {
    Timestamps: true
});

// [
//     {number:101, unavailableDates:[16.07.2022, 18.07.2022]}
//     {number:102, unavailableDates:[16.07.2022, 18.07.2022]}
//     {number:103, unavailableDates:[16.07.2022, 18.07.2022]}
//     {number:104, unavailableDates:[16.07.2022, 18.07.2022]}
//     {number:105, unavailableDates:[16.07.2022, 18.07.2022]}
// ]


export default mongoose.model("Room", RoomSchema);