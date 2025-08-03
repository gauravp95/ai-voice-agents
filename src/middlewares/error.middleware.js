export const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', err.message);
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong',
  });
};
