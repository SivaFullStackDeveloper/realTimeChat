/* eslint-disable no-undef */

module.exports = function authenticateReq(req,res,next)
{
        if(req.headers['x-key']){
          if(req.headers['x-key'] === process.env.APP_KEY || req.headers['x-key'] === process.env.WEB_KEY || req.headers['x-key'] === process.env.TEST_KEY){
            next();
          }
          else
          {
            res.status(401).send({err: 'Invalid API Key', data: null});}
        }
        else 
          res.status(401).send({err: 'Key not found', data: null}); 
}

