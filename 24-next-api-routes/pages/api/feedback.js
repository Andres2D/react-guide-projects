import fs from 'fs';
import path from 'path';

const handler = (req, res) => {
  
  if(req.method === 'POST') {
    const {email, feedback} = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback
    };

    // store in a db
    try {
      const filePath = path.join(process.cwd(), 'data', 'feedback.json');
      const fileData = fs.readFileSync(filePath);
      const data = JSON.parse(fileData);
      data.push(newFeedback);
      fs.writeFileSync(filePath, JSON.stringify(data));
  
      res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } catch (error) {
      console.log(error);
    }
  }else {
    res.status(400).json({
      message: 'Bad request'
    });
  }
};

export default handler;
