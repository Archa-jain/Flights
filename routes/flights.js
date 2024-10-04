const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('req', req.query);
    const minDate = req.query.minDate;
    const maxDate = req.query.minDate;
    const duration = req.query.duration;
    const airline = req.query.carrier;

    const url = 'https://gist.githubusercontent.com/bgdavidx/132a9e3b9c70897bc07cfa5ca25747be/raw/8dbbe1db38087fad4a8c8ade48e741d6fad8c872/gistfile1.txt';
    const fetchedFlights = await fetch(url);
    const flights = await fetchedFlights.json();
	


    const filteredFlights = flights.filter((flight) => {
        return (new Date(flight.departureTime) >= new Date(minDate))
        && (new Date(flight.departureTime) <= new Date(maxDate))
        && ((((new Date(flight.arrivalTime) - new Date(flight.departureTime))/1000)/60)/60 <= duration)
    });

    filteredFlights.forEach(flight => {
        flight.score =  
        (((new Date(flight.arrivalTime) - new Date(flight.departureTime))/1000)/60)/60*
        (flight.carrier === airline ? 0.9 :1 ) *
        5 
    });

    function compareNumbers(a,b) {
        return a.score - b.score;
      }

    filteredFlights.sort(compareNumbers);

    
    

   res.status(200).json(filteredFlights);
    

    console.log(`fetched flights`, filteredFlights);



})

module.exports = router;