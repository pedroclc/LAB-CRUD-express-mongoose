import { model, Schema } from "mongoose";

const purchaseSchema = new Schema(
  {
    shippingAdress: {
      type: String,
      required: true,
    },
    album: {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  },
  { timestamps: true }
);

const PurchaseModel = model("Purchase", PurchaseSchema);

export default PurchaseModel;
