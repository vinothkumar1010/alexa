/**
 * Say hello API
 * Try: https://mock-apis-server.firebaseapp.com/say/hello
 */
app.get('/say/hello', (req, res) => {
    // Return success response
    return res.status(200).json({"message":"Hello there... Welcome to mock server."});
  });
  /* [END `/say/hello` ] - must be added before `exports.api = ...` */