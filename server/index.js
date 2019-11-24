const express = require("express");
const cors = require("cors");
require("dotenv").config();
const json = require("body-parser").json;
const urlEncoded = require("body-parser").urlencoded;
const fetch = require("node-fetch");

const app = express();

app.use(json());
app.use(urlEncoded({ extended: true }));
app.use(cors());

app.post("/ticketMasterSearch", (req, res) => {
  const ticketMaster = new URL(
      "https://app.ticketmaster.com/discovery/v2/events"
    ),
    arguments = {
      apikey: `${process.env.REACT_APP_TICKETMASTER_API_KEY}`,
      postalCode: "90015",
      startDateTime: "2019-11-22T18:00:00Z",
      endDateTime: "2019-11-23T08:00:00Z"
    };

  Object.keys(arguments).forEach(key =>
    ticketMaster.searchParams.append(key, arguments[key])
  );
  fetch(ticketMaster)
    .then(res => res.json())
    .then(data => res.send(data._embedded.events))
    .catch(err => res.send(err.message));
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
