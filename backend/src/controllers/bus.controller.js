const express = require ("express");
const router = express.Router();

const Bus = require ("../models/bus.model")


router.get("/", async (req, res) => {
    console.log("req 8", req.params)
    const buses = await Bus.find().lean().exec();

    return res.status(200).json({data: buses})
})

router.get("/id/:id", async (req, res) => {
    try{
        const bus = await Bus.findById(req.params.id).lean().exec();
        res.status(200).json({bus})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get("/route", async (req, res) => {
    const from = req.query.from;
    const to = req.query.to
    const date =req.query.date;
    console.log(from, to, date)
    try{
        const bus = await Bus.find({$and: [{"source": from}, {"destination": to}, {"date": date}]}).lean().exec();
        res.status(200).json({bus})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get("/bookedseat/:id", async (req, res) => {
    try{
        const booked = await Bus.findById(req.params.id).lean().exec();
        res.status(200).json({booked})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post("/", async (req, res) => {
    const bus = await Bus.create(req.body);

    return res.status(201).json({data: bus})
})

router.patch("/:id/update", async (req, res) => {
    try{
        const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json({bus})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const bus = await Bus.findByIdAndDelete(req.params.id)
        res.status(204).json({bus})
    } catch (err) {
        res.status(400).json({message: err.message})

    }
})

module.exports = router