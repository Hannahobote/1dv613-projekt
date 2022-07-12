import connectDB from '../../../config/mongoose'
import { MinaSidor } from '../../../models/minaSidor-model'

// connect to database 
connectDB()

export default async function handler(req, res, next) {
  const { method, query: { id } } = req

  if (method === 'GET') {
    try {
      // get one
      //const userInfo = await MinaSidor.findById(id)
      // get one by email 
      const userInfo = await MinaSidor.find({email: id})


      if (!userInfo) {
        res.status(400).json({ message: 'user does not exist' })
      }

      res.status(200).json(userInfo)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }

  } else if (method === 'PUT') {
    try {
      // update
      const userInfo = await MinaSidor.findByIdAndUpdate(id, req.body);

      if (!userInfo) {
        res.status(400).json({ message: 'user does not exist' })
      }

      const updatedUserInfo = await MinaSidor.findById(id)

      res.status(200).json(updatedUserInfo);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  } else if (method === 'DELETE') {
    // fix later !
    try {
      const userInfo = await MinaSidor.deleteOne({ _id: id });

      if (!userInfo) {
        res.status(400).json({ message: 'user does not exist' })
      }

      res.status(204).json({ message: 'deleted' });

    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ success: false })
  }
}

