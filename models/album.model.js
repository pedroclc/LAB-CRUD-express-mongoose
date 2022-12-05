import { model, Schema } from "mongoose";

const albumSchema = new Schema(
  {
    performer: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const AlbumModel = model("Album", albumSchema);

export default AlbumModel;
