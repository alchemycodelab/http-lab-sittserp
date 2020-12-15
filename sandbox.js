const rawRequest = `POST / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr\r
\r
{"name":"spot"}`;

const parser = rawRequest => {
//   const parsed = rawRequest.match(/([\w-]+): (.*)/g);
  
  const splitter = rawRequest.split(' ');
  console.log(splitter);

  const result = {
    method: splitter[0],
    path: splitter[1]
  };

  console.log(result);
};

  
parser(rawRequest);
