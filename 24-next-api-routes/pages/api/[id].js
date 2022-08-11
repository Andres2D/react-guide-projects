import { buildFeedbackPath, extractFeedback } from './feedback';

const handler = (req, res) => {
  const {id} = req.query;
  const path = buildFeedbackPath();
  const data = extractFeedback(path);

  const feedback = data.find(feedback => feedback.id === id);

  res.status(200).json({feedback});

};

export default handler;
