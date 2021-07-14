const ClientError = require('../exceptions/ClientError');

const handleError = (error, h) => {
  if (error instanceof ClientError) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });
    response.code(error.statusCode);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Maaf, terjadi kegagalan pada server kami.',
  });
  response.code(500);
  console.log(error);
  return response;
};

module.exports = handleError;
