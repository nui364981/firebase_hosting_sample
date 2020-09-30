const functions = require("firebase-functions");
const request = require("request-promise");

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  "Authorization": "Bearer <CHANNEL-ACCESS-TOKEN>"
};

exports.BasicMessage = functions.https.onRequest((req, res) => {
  return request({
    method: "POST",
    uri: `${LINE_MESSAGING_API}/push`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      to: "<USER-ID>",
      messages: [{
        type: "location",
        title: "LINE Company (Thailand) Limited",
        address: "127 อาคารเกษรทาวเวอร์ ชั้น17 ถ.ราชดำริ แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
        latitude: 13.7460089,
        longitude: 100.5386192
      }]
    })
  }).then(() => {
      return res.status(200).send("Done");
  }).catch(error => {
      return Promise.reject(error);
  });
});
