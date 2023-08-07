
function findMatching(drivers, searchName) {
  
  const searchNameLower = searchName.toLowerCase();


  const matchingDrivers = drivers.filter(driver =>
    driver.toLowerCase() === searchNameLower
  );

  return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
    const lowerQuery= query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
        const lowerDriverName = driver.toLowerCase();
        return lowerDriverName.startsWith(lowerQuery);
    });
    return matchingDrivers;
}
const drivers = ['John Smith', 'Jane Doe', 'Michael Johnson', 'Sarah Lee'];
const query = 'j';

const result = fuzzyMatch(drivers, query);
console.log(result);

function matchName2(drivers, query){
    const matchingDrivers2 = drivers.filter(driver => {
        
    })
}
function matchName(drivers, query) {
   
    const matchingDrivers = drivers.filter(driver => {
      return driver.name === query;
    });
  
    return matchingDrivers;
  }
  
  