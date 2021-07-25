const Bus = require("../models/bus");
const express = require("express");
const router = express.Router();

const getBus = async (req, res) => {
  const getData = await Bus.find({});
  res.status(200).json({ data: getData });
};

const postBus = async (req, res) => {
  console.log(req.body);
  const postData = await Bus.create(req.body);
  res.status(201).json({ data: postData });
};

const deleteBus = async (req, res) => {
  const id = req.params.id;
  const dataObj = await Bus.findByIdAndDelete(id);
  res.status(201).json({ data: dataObj });
};

const eachBus = async (req, res) => {
  const id = req.params.id;
  console.log("id in eachBusDetail", id);
  const dataObj = await Bus.findById(id);
  res.status(200).json(dataObj);
};
const eachBusUpdate = async (req, res) => {
  const id = req.params.id;
  const dataObj = await Bus.findByIdAndUpdate(id, req.body);
  res.status(200).json(dataObj);
};

router.get("/", getBus);
router.post("/", postBus);
router.delete("/:id", deleteBus);
router.get("/:id", eachBus);
router.patch("/:id", eachBusUpdate);

module.exports = router;
