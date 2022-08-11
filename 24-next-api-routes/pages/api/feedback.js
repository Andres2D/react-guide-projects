import fs from 'fs';
import path from 'path';

const buildFeedbackPath = () => {
  return path.join(process.cwd(), 'data', 'feedback.json');
};

const extractFeedback = (path) => {
  try {
    const fileData = fs.readFileSync(path);
    const data = JSON.parse(fileData);
    return data;
  } catch (error) {
    return [];
  }
}

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
      const filePath = buildFeedbackPath();
      const data = extractFeedback(filePath);
      data.push(newFeedback);
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } catch (error) {
      console.log(error);
    }
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({
      feedback: data
    });
  }
};

export default handler;
