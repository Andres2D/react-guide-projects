const handler = (req, res) => {
  const { email } = req.body;
  if(!email || !email.includes('@')) {
    res.status(400).json({ message: 'Bad request'});
    return;
  }

  if(req.method === 'POST') {
    res.status(201).json({message: `${email} registered successfully`});
  }
};

export default handler;
