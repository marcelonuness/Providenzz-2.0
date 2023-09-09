export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        const id = await createItem(data)
        res.status(200).json({ id })
      } 
    
  }