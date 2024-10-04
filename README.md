# Flights
API to fetch the flights based on the filters and sort based on the calculated score
The user must be able to search for a flight based on any combination of the following:

Acceptable departure time range (min/max date+time)

Maximum acceptable flight duration (in hours)

Preferred airline carrier
 
The system must query a data provider and return a list of matching flights.
The results must be scored according to the following algorithm and sorted:

(flight duration in hours) * (carrier preference) + (distance in miles between airports)

Lower scores are better

The carrier preference score is 0.9 for preferred carriers and 1.0 for other carriers
