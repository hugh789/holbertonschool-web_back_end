export default function cleanSet(set, startString) {
    if (startString && startString.length === 0) {
      return '';
    }
  
    const result = [];
    for (const term of [...set]) {
      if (term) {
        const pos = term.indexOf(startString);
  
        if (pos === 0) {
          result.push(term.slice(startString.length));
        }
      }
    }
  
    return result.join('-');
  }