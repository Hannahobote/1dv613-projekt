import mongoose, { isObjectIdOrHexString, isValidObjectId } from 'mongoose'

// for patient info
export const patientSchema = new mongoose.Schema({
  namn: {
    type: String,
    required: true,
  },
  efternamn: {
    type: String,
    required: true,
  },
  personnr: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  mobilnr: {
    type: String,
    required: true,
    unique: true
  },
  kontaktperson: {
    type: String,
    required: true
  },
  anhorig: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export const Patieny = mongoose.models.Patient || mongoose.model('Patient', patientSchema);