(function(){
  'use strict';
  /*选中页面中所有的input[data-rule]*/

  /*解析每一个input的验证规则*/

  /*验证*/
  var validator = new Validator('abc',{
  pattern:'^[0-9A-Za-z]*$'
  });

  //var result = validator.validata_max();
  //var result = validator.validata_min();
//var result = validator.vilidata_maxlength();
//var result = validator.validata_numeric();
  //var result = validator.validata_required();
  var result  = validator.valitada_pattern();
  console.log('result', result);

});
