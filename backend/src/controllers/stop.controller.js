const express = require ("express");
const router = express.Router();

const Stop = require ("../models/stops.model")


router.get("/", async (req, res) => {
    const stops = await Stop.find().lean().exec();

    return res.status(200).json({data: stops})
})

router.get("/id/:id", async (req, res) => {
    try{
        const stop = await Stop.findById(req.params.id).lean().exec();
        res.status(200).json({stop})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get("/points", async (req, res) => {
    const city = req.query.city
    const busId = req.query.busId
    try{
        
        const stops = await Stop.findOne({$and: [{"busId._id": busId}, {"city": city}]}).lean().exec();
        //console.log(stops.points)
       
        res.status(200).json({points: stops.points})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post("/", async (req, res) => {
    const stop = await Stop.create(req.body);

    return res.status(201).json({data: stop})
})



router.patch("/:id/update", async (req, res) => {
    try{
        const stop = await Stop.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({stop})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const stop = await Stop.findByIdAndDelete(req.params.id)
        res.status(200).json({stop})
    } catch (err) {
        res.status(400).json({message: err.message})

    }
})

module.exports = router