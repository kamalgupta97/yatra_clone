export const requirement = {
    agency_name:"Kamal Travel",
    bus_type:"AC Seater",
    source:"Delhi",
    destination:"Jaipur",
    departure_date:"",
    travel_date:"22 Jul, 2021",
    time:"08:00 AM - 01:15 PM",
    bording:[
        {
            point:"Dhaula Kuan",
            time:"08:00 AM"
        },
        {
            point:"Kashemere Gate",
            time:"08:10 AM"
        }
    ],
    dropping:[
        {
            point:"Hawa Mahal",
            time:"01:00 PM"
        },
        {
            point:"Narayan Singh Circle",
            time:"01:10 PM"
        },

    ]
}












// const bus_types = "Non-AC Seater" || "AC Seater" || "AC Sleeper" || "Non-AC Sleeper" || "AC SemiSleeper" || "Non-AC SemiSleeper";

// export const totalseats = new Array(30).fill(0).map((a, i) => ({seatnumber:i+1,available:true}));

export const totalsittngseats = new Array(40).fill(0).map((a, i) => i+1);

export const totalsleeperseats = new Array(30).fill(0).map((a, i) => i+1);

// seats[0].available(false)
// console.log(seats)


// Booked 
// Selected
// Empty

