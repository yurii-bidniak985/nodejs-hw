import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (HttpError(err)) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  res.status(500).json({
    message: 'Something went wrong',
  });
};
