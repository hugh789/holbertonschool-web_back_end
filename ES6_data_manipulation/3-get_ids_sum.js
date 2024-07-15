export default function getStudentIdsSum(list) {
    let result = 0;
    result = list.reduce(
      (accumulator, currentValue) => accumulator + currentValue.id,
      0,
    );
  
    return result;
  }