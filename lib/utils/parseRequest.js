module.exports = rawRequest => {
      
  const splitter = rawRequest.split(' ');

  const splitAgain = rawRequest.split('{');
  
  if(!splitAgain[1]) {
    const result = {
      method: splitter[0],
      path: splitter[1]
    };
    return result;
  } else {

    const result = {
      method: splitter[0],
      path: splitter[1],
      body: `{${splitAgain[1]}`
    };

    return result;

  }
    
};


