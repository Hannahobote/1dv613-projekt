import mongoose from 'mongoose'

// for mina sidor
export const minaSidorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phonenr: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  label: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export const MinaSidor = mongoose.models.MinaSidor || mongoose.model('MinaSidor', minaSidorSchema);