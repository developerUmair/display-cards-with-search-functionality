import React from "react";

const LearnPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("I have succeeded");
      }, 1000);
    } else {
      reject("I have rejected");
    }
  });

  myPromise
    .then((value) => value + '!!!!')
    .then(newValue => console.log(newValue))
    .catch((rejctedValue) => console.log(rejctedValue));
  return <div>Learn</div>;
};

export default LearnPromise;
