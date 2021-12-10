const express = require('express');
var axios = require('axios');
var cors = require('cors')
const app = express();
const port = 3000;
const API_KEY="08e3fdb043fc41f8b43e35ccf3d18b8f";
const category = `&category=`;
const country = `country=`;
const baseUrl='https://newsapi.org/v2/top-headlines?';

app.use(cors());

app.get('/news', (req, res) => {
  const countryCode = req.query.country;
  const categoryCode = req.query.category;
  var data=[];
  const config = {
    headers: {
        "X-Api-Key": API_KEY,
        }
  }
  axios.get(baseUrl+country+countryCode+category+categoryCode,config)
  .then(response => {
      data=response.data;
      res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})