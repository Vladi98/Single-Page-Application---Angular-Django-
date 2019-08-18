import * as cors from "cors";


var express = require('express');
//get router
var router = express.Router();

//options for cors midddleware
const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "http://djangorestapidata.herokuapp.com/furnitures/",
  preflightContinue: false
};

//use cors middleware
router.use(cors(options));

//add your routes

//enable pre-flight
router.options("*", cors(options));