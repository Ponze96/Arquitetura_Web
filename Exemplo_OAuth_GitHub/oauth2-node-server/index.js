const express = require("express");
const axios = require("axios");
var cors = require("cors");

const CLIENT_ID = "73ca6fc0559baed7904c";
const CLIENT_SECRET = "731e85354f4576e072547f6298f7c48f7c53e374";
const GITHUB_URL = "https://github.com/login/oauth/access_token";
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.get("/oauth/redirect", (req, res) => {
axios({
method: "POST",
url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
headers: {
Accept: "application/json",
},
}).then((response) => {
res.redirect(
`http://localhost:3000?access_token=${response.data.access_token}`
);
});
});
const PORT = 8080;
app.listen(PORT, () => {
console.log(`Listening at port ${PORT}`);
});