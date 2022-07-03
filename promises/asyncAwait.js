/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Unfortunately, you can't invite all your friends if your birthday party needs to be in your house.

How can your create a Promise for that situation?
Start defining the weather. Is it raining?
Then write a promise (create a promise).
Then check the promise (consume the promise).
*/

//Define the weather.
let weather = "raining";

//Create a promise.
let createNewPromise = new Promise((resolve, reject) => {
  if (weather != "raining") {
    resolve("Go out! Have a party");
  } else {
    reject(new Error("Stay home! It's raining"));
  }
});

//Consume the promise using async...await.

async function partyHappening() {
  try {
    let party = await createNewPromise;
    console.log(party);
  } catch (error) {
    console.log(error);
  }
}

partyHappening();
