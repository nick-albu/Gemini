import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    name: String,
    note: String,
    img: String,
    likes: Number,
    lat: Number,
    long: Number,
    },
);

noteSchema.index({ location: "2dsphere" });
export default mongoose.model("notes", noteSchema);