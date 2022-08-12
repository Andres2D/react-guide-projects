const handler = (req, res) => {
  const { id } = req.query;
  console.log('Query: ', id);

  if(!id) {
    return req.status(400).json({ message: 'Bad request' });
  }

  if(req.method === 'POST') {
    const { email, name, comment } = req.body;

    if(
      !email.includes('@') ||
      !name ||
      name.trim() === '' || 
      !comment ||
      comment.trim() === ''
    ) {
      res.status(400).json({ message: 'Bad request '});
      return;
    }
      
    const newComment = { 
      id: new Date().toISOString(),
      email, 
      name, 
      comment 
    }
    console.log(newComment);
    res.status(201).json({ message: 'comment saved successfully', comment: newComment });
    return;
  } 
  
  if(req.method === 'GET'){
    const mockComments = [
      {
        id: '1',
        email: 'maximilian@mail.com',
        name: 'Maximilian',
        comment: 'My comment is amazing!'
      },
      {
        id: '2',
        email: 'maximilian@mail.com',
        name: 'Maximilian 2',
        comment: 'My comment is amazing 2!'
      }
    ];
    res.status(200).json({comments: mockComments});
    return;
  }
  res.status(400).json({ message: 'Bad request '});
};

export default handler;