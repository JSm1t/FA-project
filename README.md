# Flex-appeal assessement

### Mini-project
To start project first install dependencies:
`npm install`  
Then use `npm start` to start the application.

Running of the Test suite is available under `npm test`

### Answers
**1. Callback hell**
- Gebruik maken van Promises, voorbeeld:
```javascript
  const getUserPromise = new Promise((resolve, reject) => {
      getUser((err, data) => {
        if(err) return reject(err);
        resolve(data);      
      })
    })
  const getRelatedDogsForUserPromise = (userId) => {
    return new Promise((resolve, reject) => {
      getRelatedDogsForUser((err, data) => {
        if(err) return reject(err);
        console.log(data)
        resolve(data);
      }
    })
  }
  
  getUserPromise()
    .then((data) => {
      return getRelatedDogsForUserPromise(data.userId)
    })
    .then((relatedDogsData) => {
      //do something with dogrelateddata
    })
    .catch((err) => {
      //handle error
    })
    
    //Alternatively use async await:
  try {
    const userData = await getUserPromise();
    const relatedDogData = await getRelatedDogsForUserPromise(data.userId)
  } catch (err) {
    //handle error
  }
```
**2. Promises**
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hond');
  }, 100);
   console.log('kat');
})
.then(console.log)
.catch(console.error);
```

Eerst zal `kat` naar de console worden gelogd, vervolgens zal dit na 100 ms ook voor `hond` gebeuren.
Omdat er geen gebruik wordt gemaakt van van de Reject en Resolve callback, zal de 'then' en 'catch' nooit uitgevoerd worden.
Daarnaast mist console in de `console.log`, de juist `this` context. Een:
```javascript
  console.log.bind(console)
```
zou een oplossing kunnen bieden.

**3. Wat is er mis met deze code?**
```javascript
function getUser(userId) {
  return queryDb(“SELECT * FROM users WHERE id = “ + userId + “)
    .then((result) => {
      if (!result) throw new Error(“User not found”);
      return result;
    });
 }
 
getUser(3)
  .then((user) => console.log(“User found: “, user));
```
Voor de getUsers(3) promise ontbreekt error handling in de vorm van een catch, 
waardoor een unhandledpromiserejection zal ontstaan. Errors zullen op deze manier 'opgeslokt' worden.
Daarnaast is er kans op een SQL injection met deze manier van een sql query opbouwen.
Simpele oplossing:
```javascript
getUser(3)
  .then((user) => console.log(“User found: “, user));
  .catch(err => console.error(err))
```
