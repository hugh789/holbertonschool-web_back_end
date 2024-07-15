export deafult function getStudentsByLocation(list, city) {
    let results = [];
    results = list.filter((item) => item.location === city);
    
    return results;
}