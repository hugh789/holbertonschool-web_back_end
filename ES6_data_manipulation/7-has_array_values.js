export default function hasValuesFromArray(dataSet, toCheck) {
    const result = toCheck.map((i) => dataSet.has(i));
  
    return (!result.includes(false));
  }