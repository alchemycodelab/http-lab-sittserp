module.exports = rawRequest => {
      
  const splitter = rawRequest.split(' ');

  const splitAgain = rawRequest.split('\r\n\r\n');
  
  if(!splitAgain[1]) {
    return {
      method: splitter[0],
      path: splitter[1]
    };
  } else {

    return {
      method: splitter[0],
      path: splitter[1],
      body: `${splitAgain[1]}`
    };

  }
    
};


