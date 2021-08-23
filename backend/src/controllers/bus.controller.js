const express = require ("express");
const router = express.Router();

const Bus = require ("../models/bus.model")

const data1 = [
    {
        operator: 'laxmi travels',
        source: 'delhi',
        destination: 'jaipur',
        departtime: '7',
        arrivaltime: '14',
        bustype: 'sleeper',
        totalseat: 30,
        availableseat: 30,
        fare: '700',
        duration: '7 hr',
        arrId: '60fcbb801d70b35540c0bcc3',
        desId: '60fcbc741d70b35540c0bcc8'
      },
      {
        operator: 'Jain travels regd',
        source: 'delhi',
        destination: 'jaipur',
        departtime: '13',
        arrivaltime: '16',
        bustype: 'sleeper',
        totalseat: 30,
        availableseat: 30,
        fare: '800',
        duration: '3 hr',
        arrId: '60fcbfcd1d70b35540c0bce6',
        desId: '60fcbcd41d70b35540c0bccd'
      },
      {
        operator: 'Sai Ram Travels',
        source: 'delhi',
        destination: 'jaipur',
        departtime: '11',
        arrivaltime: '15',
        bustype: 'semi sleeper',
        totalseat: 41,
        availableseat: 41,
        fare: '400',
        duration: '4 hr',
        arrId: '60fcbb801d70b35540c0bcc3',
        desId: '60fcbc741d70b35540c0bcc8'
      },
]

router.get("/", async (req, res) => {
    //console.log("req 8", req.params)
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
    const bus = await Bus.find({$and: [{"source": from}, {"destination": to}, {"date": date}]}).lean().exec();
    if(bus.length > 0) {
        res.status(200).json({bus})
    }
    else {
        if(from == "delhi" && to == "jaipur") {
            const bus1 = await Bus.create({
                operator: 'laxmi travels',
                source: 'delhi',
                destination: 'jaipur',
                departtime: '7',
                arrivaltime: '14',
                bustype: 'sleeper',
                totalseat: 30,
                availableseat: 30,
                fare: '700',
                duration: '7 hr',
                arrId: '60fcbb801d70b35540c0bcc3',
                desId: '60fcbc741d70b35540c0bcc8',
                date: date
              });
            const bus2 = await Bus.create({
                operator: 'Jain travels regd',
                source: 'delhi',
                destination: 'jaipur',
                departtime: '13',
                arrivaltime: '16',
                bustype: 'sleeper',
                totalseat: 30,
                availableseat: 30,
                fare: '800',
                duration: '3 hr',
                arrId: '60fcbfcd1d70b35540c0bce6',
                desId: '60fcbcd41d70b35540c0bccd',
                date: date
              })
            const bus3 = await Bus.create({
                operator: 'Sai Ram Travels',
                source: 'delhi',
                destination: 'jaipur',
                departtime: '11',
                arrivaltime: '15',
                bustype: 'semi sleeper',
                totalseat: 41,
                availableseat: 41,
                fare: '400',
                duration: '4 hr',
                arrId: '60fcbb801d70b35540c0bcc3',
                desId: '60fcbc741d70b35540c0bcc8',
                date: date
              })
        }
        const findbus = await Bus.find({$and: [{"source": from}, {"destination": to}, {"date": date}]}).lean().exec();

        return res.status(201).json({data: findbus})
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
    console.log(req.body)
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