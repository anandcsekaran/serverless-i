module.exports.firsthandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your GET function executed successfully!",
        //input: event,
      },
      null,
      2
    ),
  };
};

module.exports.secondhandler = async (event) => {
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
