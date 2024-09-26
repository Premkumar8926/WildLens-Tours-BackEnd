import mongoose from "mongoose";

// Define the schema for the Bookings model
const bookingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    bookingDetails: {
        type: Object
    },
    status: {
        type: String,
        default: "pending"
    }
});

// Check if the 'Bookings' model is already defined
const Bookings = mongoose.models.Bookings || mongoose.model("Bookings", bookingSchema);

export default Bookings;
