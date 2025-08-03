export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is working',
    uptime: process.uptime()
  });
};
