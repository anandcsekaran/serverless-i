module.exports.firsthandler = async (event) => {
  console.log('anand')
  console.log(event)
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
  console.log(event)
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
