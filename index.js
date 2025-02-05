// import express from 'express';
// import express from 'crypto-js';
const express = require("express");
const cryptojs = require("crypto-js");

const app = express();
app.use(express.json());
const port = 6000;

// const getKeyAES = function (key) {
//   return cryptojs.enc.Hex.parse(cryptojs.SHA256(key).toString());
// }

// const decryptAES = function (message, key) {
//   const messageBytes = cryptojs.enc.Base64.parse(message);
//   const iv = cryptojs.lib.WordArray.create(messageBytes.words.slice(0, 4));
//   const ciphertext = cryptojs.lib.WordArray.create(messageBytes.words.slice(4));
//   const payload = cryptojs.AES.decrypt(
//     { ciphertext: ciphertext },
//     getKeyAES(key),
//     { iv: iv, ...{ mode: cryptojs.mode.CBC, padding: cryptojs.pad.Pkcs7 } }
//   );
//   return payload.toString(cryptojs.enc.Utf8);
// }

// const getKeyTripleDES = function (key) {
//   let securityKeyArray = cryptojs.MD5(key).toString();
//   securityKeyArray += securityKeyArray.substring(0, 16);
//   return cryptojs.enc.Hex.parse(securityKeyArray);
// };

// const decryptTripleDES = function (message, key) {
//   const payload = cryptojs.TripleDES.decrypt(message, getKeyTripleDES(key), {
//     mode: cryptojs.mode.ECB,
//     padding: cryptojs.pad.Pkcs7,
//   });
//   return payload.toString(cryptojs.enc.Utf8);
// };

app.post("/notifications", async (req, res) => {
  const notificationData = req.body;
  console.log(notificationData);
  return res.sendStatus(200);

  // // console.log(notificationData);
  // // return res.sendStatus(200);

  // if (!notificationData) {
  // }

  // // try {
  // //   const resultado = await collection.insertOne(notificationData);
  // //   return res.sendStatus(200);
  // // } catch (err) {
  // //   console.error(err);
  // //   return res.sendStatus(400);
  // // }
  // try {
  //   // console.log(req.headers)
  //   console.log(req.body);

  //   const secret =
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiI3NzA3NTciLCJWZXJzaW9uIjoiMS4wIn0.X_ubupT4w9HMpQmm55IMtGHlrsTbdALXXsv6O9fkC60";
  //   const { payload } = req.body;
  //   const dto = JSON.parse(decryptAES(payload, secret));
  //   console.log(dto);
  //   return res.sendStatus(200);
  // } catch (error) {
  //   console.log(error);
  //   return res.sendStatus(400);
  // }
});

// Iniciar el servidor
app.listen(port, async () => {
  console.log(`Server on port: ${port}`);
});
