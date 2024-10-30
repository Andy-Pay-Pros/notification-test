const express = require("express");
const bodyParser = require("body-parser");
const cryptojs = require("crypto-js");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://sancheztest97:1KbDa5m5lUAXFOmc@notification.qjury.mongodb.net/?retryWrites=true&w=majority&appName=notification";

const app = express();
app.use(express.json());
const port = 6000;

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

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let collection;

app.post("/notifications", async (req, res) => {
  const notificationData = req.body;

  console.log(notificationData);
  return res.sendStatus(200);

  // if (!notificationData) {
  //   return res.sendStatus(400);
  // }

  // try {
  //   const resultado = await collection.insertOne(notificationData);
  //   return res.sendStatus(200);
  // } catch (err) {
  //   console.error(err);
  //   return res.sendStatus(400);
  // }
  //   try {
  //     // console.log(req.headers)
  //     console.log(req.body);

  //     const secret =
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiI3NzA3NTciLCJWZXJzaW9uIjoiMS4wIn0.X_ubupT4w9HMpQmm55IMtGHlrsTbdALXXsv6O9fkC60";
  //     const { payload } = req.body;
  //     const dto = JSON.parse(decryptTripleDES(payload, secret));
  //     console.log(dto);
  //     return res.sendStatus(200);
  //   } catch (error) {
  //     console.log(error);
  //     return res.sendStatus(400);
  //   }
});

// Iniciar el servidor
app.listen(port, async () => {
  console.log(`Server on port: ${port}`);
  await connectToDB();
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
    const database = client.db("notification");
    collection = database.collection("notification");
  } catch (err) {
    console.error("Error conectando a la base de datos:", err);
  }
}
