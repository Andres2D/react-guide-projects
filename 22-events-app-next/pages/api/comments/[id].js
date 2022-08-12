const handler = (req, res) => {
  const { id } = req.query;
  console.log('Query: ', id);

  if(!id) {
    return req.status(400).json({ message: 'Bad request' });
  }

  if(req.method === 'POST') {
    const { email, name, comment } = req.body;
    console.log({ email, name, comment });
    res.status(201).json({ message: 'comment saved successfully' });
  } else {
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
    res.status(200).json({mockComments})
  }
};

export default handler;