import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:String,  // Changed to String to handle both numbers and text
    category:String,
    image:String,
    title:String
})
const Book=mongoose.model("Book",bookSchema);

export default Book;