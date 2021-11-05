function sendNotificationExternal(req, res) {
  var token = req.body.token;
  var resSendNotificationExternal = {};

  function checkFields() {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  function sendNotificationFunc() {
    return new Promise((resolve, reject) => {   
      resolve();
    })
  }

  function sendResponse() {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  checkFields()
    .then(sendNotificationFunc)
    .then(sendResponse)
    .catch(err => {
     console.log("Error in Code->"+ err);
     resSendNotificationExternal.error=err;
     res.json(resSendNotificationExternal);
    })
}
