/**
 * Util to sort Array of Objects by certain String Propery
 * @param {*} array 
 * @param {*} sortByProp 
 */
const sortByProperty = (array, sortByProp) => {
  if (!sortByProp) return array;

  return array.sort((objectA, objectB) => {
    if (objectA[sortByProp].toUpperCase() < objectB[sortByProp].toUpperCase()) {
      return -1;
    }
    if (objectA[sortByProp].toUpperCase() > objectB[sortByProp].toUpperCase()) {
      return 1;
    }
    return 0;
  });
}

/**
 * Util to filter Array of Objects based on availibility of a property
 * @param {*} array 
 * @param {*} sortByProp
 * @param {*} shouldInclude
 */
const filterByProperty = (array, property, shouldInclude) => {
  if (!property || !shouldInclude) return array;
  return array.filter((element) => {
    return element[property].includes(shouldInclude)
  });
}

/**
 * Util to filter Array of Objects based on searchString
 * @param {array} array 
 * @param {array} properties 
 * @param {string} searchString 
 */
const filterByProperties = (array, properties, searchString) => {
  if (!properties || !searchString) return array;

  return array.filter((element) => {
    const arrayOfProps = properties.map((value) => element[value]);
    const combinedProps = arrayOfProps.reduce((acc, currVal) => acc + currVal);
    return combinedProps.toLowerCase().includes(searchString.toLowerCase());
  });
}


module.exports = { sortByProperty, filterByProperty, filterByProperties };