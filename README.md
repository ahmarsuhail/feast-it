### Feast It - Technical Challenge

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