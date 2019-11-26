const express = require("express");
const cors = require("cors");
const json = require("body-parser").json;
const urlEncoded = require("body-parser").urlencoded;
const fetch = require("node-fetch");

require("dotenv").config();

const app = express();

app.use(json());
app.use(urlEncoded({ extended: true }));
app.use(cors());

app.post("/TicketMasterSearch", (req, res) => {
  const ticketMaster = new URL(
      "https://app.ticketmaster.com/discovery/v2/events"
    ),
    arguments = {
      apikey: `${process.env.REACT_APP_TICKETMASTER_API_KEY}`,
      startDateTime: req.body.startDateTime,
      endDateTime: req.body.endDateTime,
      radius: 2000
    };

  Object.keys(arguments).forEach(key =>
    ticketMaster.searchParams.append(key, arguments[key])
  );

  isNaN(parseInt(req.body.location)) === true
    ? ticketMaster.searchParams.append("city", req.body.location)
    : ticketMaster.searchParams.append("postalCode", req.body.location);

  fetch(ticketMaster)
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => res.send(err.message));
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
