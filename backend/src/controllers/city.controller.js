const express = require ("express");
const router = express.Router();

const City = require ("../models/city.model")


router.get("/all", async (req, res) => {
    const citys = await City.find().lean().exec();

    return res.status(200).json({data: citys})
})

router.get("/id/:id", async (req, res) => {
    try{
        const city = await City.findById(req.params.id).lean().exec();
        res.status(400).json({city})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get("/", async (req, res) => {
    try{
        const all = []
        const city = await City.find().select("city").lean().exec();
        city.forEach(el => {
            all.push(el.city)
        })
        res.status(400).json({all})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post("/", async (req, res) => {
    const city = await City.create(req.body);

    return res.status(201).json({data: city})
})

router.patch("/:id/update", async (req, res) => {
    try{
        const city = await City.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(400).json({city})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const city = await City.findByIdAndDelete(req.params.id)
        res.status(400).json({city})
    } catch (err) {
        res.status(400).json({message: err.message})

    }
})

module.exports = router