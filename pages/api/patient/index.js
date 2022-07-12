import connectDB from '../../../config/mongoose'
import {Patient} from '../../../models/patient-model'

// connect to database 
connectDB()

export default async function handler(req, res,next) {
  const { method } = req
  if (method === 'GET') {
    try {
      // get all
      const userInfo = await Patient.find();
      res.status(200).json({userInfo})
    } catch (error) {
       res.status(400).json({ error: error.message });
    }
  } else if (method === 'POST') {
    try {
      // create
      const userInfo = await Patient.create(req.body);
       res.status(201).json({message: userInfo})
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ success: false });
  }
}