const handler = (req, res) => {
  const { email } = req.body;
  if(!email) {
    return res.status(400).json({ message: 'Bad request'});
  }
  res.status(200).json({message: `${email} registered successfully`});
};

export default handler;
