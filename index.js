module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your GET function executed successfully!",
        //input: event,
      },
      null,
      2
    ),
  };
};

module.exports.handlerpost = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your POST function executed successfully!",
        //input: event,
      },
      null,
      2
    ),
  };
};
