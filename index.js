// Write your solution in this file!
let driver={};

function updateDriverWithKeyAndValue(driver, key, value){
const newDriver={...driver};
newDriver[key]=value;
return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key, value){
  const newDriver=Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;

 }

 function destructivelyDeleteFromDriverByKey(driver, key, value){
  let newDriver=driver[key]=value;
  delete newDriver;
 return driver;


 }
