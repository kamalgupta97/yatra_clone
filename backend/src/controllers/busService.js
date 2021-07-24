const BusServices = require("../models/busService");
const express = require("express");
const router = express.Router();

const getBusService = async (req, res) => {
  const getData = await BusServices.find({});
  res.status(200).json({ data: getData });
};

const postBusDetails = async (req, res) => {
  console.log(req.body);
  const postData = await BusServices.create(req.body);
  res.status(201).json({ data: postData });
};

const deleteBusDetails = async (req, res) => {
  const id = req.params.id;
  const dataObj = await BusServices.findByIdAndDelete(id);
  res.status(201).json({ data: dataObj });
};

const eachBusDetail = async (req, res) => {
  const id = req.params.id;
  console.log("id in eachBusDetail", id);
  const dataObj = await BusServices.findById(id);
  res.status(200).json(dataObj);
};

router.get("/", getBusService);
router.post("/", postBusDetails);
router.delete("/:id", deleteBusDetails);
router.get("/:id", eachBusDetail);

module.exports = router;
