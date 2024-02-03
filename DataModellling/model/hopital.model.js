const mongoose = required("mongoose");

const hoptialschema = new mongoose.schema({
  Name: {
    type: String,
    required: true,
  },

  Address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
  specialisIn: [{ type: String }],
});

export const user = mongoose.model("hoptialschema", hoptialschema);
