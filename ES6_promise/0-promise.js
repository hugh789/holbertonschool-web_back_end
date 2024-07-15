export default function getResponseFromAPI() {
    const myPromise = new Promise(() => {
      setTimeout(() => {
        // console.log('foo');
      }, 300);
    });
  
    return myPromise;
  }
  