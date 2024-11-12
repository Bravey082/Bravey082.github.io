// api/cors.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://bravey.us.kg');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  // 处理实际请求
  res.status(200).json({ message: 'Hello World!' });
}