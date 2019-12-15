### Feast It - Technical Challenge

### Example queries:

- App is deployed at: https://feast-it-test.herokuapp.com
- API can be accessed at: https://feast-it-test.herokuapp.com/api/v1/suggestions


Some examples of queries are:

- Returns all restaurants with halal, sorted by distance

```
https://feast-it-test.herokuapp.com/api/v1/suggestions?q=halal&longitude=122.409668813219&latitude=37.7806943774082
```

- Returns all restaurants with halal, without distance

```
https://feast-it-test.herokuapp.com/api/v1/suggestions?q=halal
```

- Currently, the api only searches the fields:
- Applicant,
- FacilityType
- LocationDescription
- Address
- Food Items

For a paritcular search term as these seemed the most relevant for a query.

### Process

- Created POSTGRES DB on AWS
- Used pgAdmin to export data to DB from csv file
- Wrote express route to query DB

### Choices

- Using regex on certain fields only:
I used regex for partial query matching only on the fields 
```
- Applicant,
- FacilityType
- LocationDescription
- Address
- Food Items
```

I thought these fields are the most relevant since they allow you to query on things like type of food, street name etc.

Using regex allows partial queries.

### Challenges

Since I've never used POSTGRES & POSTGIS before, it took a while to get used to things. 

I sure that there are probably better and more efficient ways to do this search.

If I had more time, I would try and understand the different data types better,
and how to use postgis properly to index data and reduce search times.