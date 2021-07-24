const DropBoards = require("../models/dropBoardPoint");
const express = require("express");
const router = express.Router();

const postLocation = async (req, res) => {
    const postData = await DropBoards.create(req.body);
    res.status(201).json({ data: postData });
};

const getAllLocation = async (req, res) => {
  const getData = await DropBoards.find({});
  res.status(200).json({ data: getData });
};

const getOneLocation = async (req, res) => {
  const id = req.params.id;
  const dataObj = await DropBoards.findById(id);
  res.status(200).json({ data: dataObj });
};

const patchLocation = async (req, res) => {
    const id = req.params.id;
    const dataObj = await DropBoards.findByIdAndUpdate(id, req.body, {new: true});
    res.status(201).json({ data: dataObj });
};

const deleteLocation = async (req, res) => {
  const id = req.params.id;
  const dataObj = await DropBoards.findByIdAndDelete(id);
  res.status(201).json({ data: dataObj });
};

router.post("/", postLocation);
router.get("/", getAllLocation);
router.get("/:id", getOneLocation);
router.patch("/:id", patchLocation);
router.delete("/:id", deleteLocation);

module.exports = router;
