
var request = require('request');



export default function handler(req, res) {

  



  const type = req.query["params"][0]
  const ticker = req.query["params"][1]

  
  console.log('query: ' + JSON.stringify(req.query)); 


    
  res.status(200).json(
      
      request.get({
          url: `https://www.alphavantage.co/query?function=${type}&symbol=${ticker}&apikey=WWC7A3CDA1VPGKID`,
          json: true,
          headers: {'User-Agent': 'request'}
        },

        ))
      }

   