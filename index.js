const express = require("express");
const bodyParser = require("body-parser");
const cryptojs = require("crypto-js");

const app = express();
const port = 3000;

const getKeyTripleDES = function (key) {
  let securityKeyArray = cryptojs.MD5(key).toString();
  securityKeyArray += securityKeyArray.substring(0, 16);
  return cryptojs.enc.Hex.parse(securityKeyArray);
};

const decryptTripleDES = function (message, key) {
  const payload = cryptojs.TripleDES.decrypt(message, getKeyTripleDES(key), {
    mode: cryptojs.mode.ECB,
    padding: cryptojs.pad.Pkcs7,
  });
  return payload.toString(cryptojs.enc.Utf8);
};

app.use(express.json());
app.post("/notifications", (req, res) => {
  try {
    // console.log(req.headers)
    console.log(req.body);

    const secret =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiI3NzA3NTciLCJWZXJzaW9uIjoiMS4wIn0.X_ubupT4w9HMpQmm55IMtGHlrsTbdALXXsv6O9fkC60";
    const { payload } = req.body;
    const dto = JSON.parse(decryptTripleDES(payload, secret));
    console.log(dto);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
