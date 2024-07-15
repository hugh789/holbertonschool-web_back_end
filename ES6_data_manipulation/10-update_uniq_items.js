export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    const data = [...map];
    for (const [k, v] of data) {
      // console.log(k)
  
      // update by reference
      if (v === 1) {
        map.set(k, 100);
      }
    }
  }