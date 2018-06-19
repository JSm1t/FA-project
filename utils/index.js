const sortByProperty = (array, sortByProp) => {
  const sortedArray = array.sort((entityA, entityB) => {
    if(entityA[sortByProp].toUpperCase() < entityB[sortByProp].toUpperCase()) {
      return -1;
    }
    if(entityA[sortByProp].toUpperCase() > entityB[sortByProp].toUpperCase()) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}


module.exports = { sortByProperty };