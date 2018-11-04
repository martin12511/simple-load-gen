var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');

var reg = new RegExp('^[0-9]+$');


router.get('/', function(req, res, next) {
  res.render('start',{status: 'started'})
});

router.get('/:id', function(req, res, next) {
  uuid_array=[]
  bignum_array=[]
  bignum_mult=[]

  let load_int=req.params.id
  for(i=0;i<load_int;i++){
    uuid_array.push(uuidv4())
    var numberPattern = /\d+/g;
    bignum_array.push(uuidv4().match(numberPattern).join(''));
  }

  for(i=0;i<bignum_array.length;i++){
    console.log(bignum_array[i])
    bignum_mult.push(bignum_array[i]*bignum_array[i])

  }




  
  uuid_array.sort()
  uuid_obj={uuid_array: uuid_array, bignum_mult: bignum_mult}
  //console.log(req.params.id)
  res.render('start', {status: req.params.id, uuid_obj: uuid_obj})
});

module.exports = router;
