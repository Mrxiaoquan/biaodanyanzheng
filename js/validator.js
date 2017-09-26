$(function(){
  'use strict';

  window.validator = function(val, rule) {

this.is_valid=function(new_val){
/*如果不是必填项且用户未填入任何内容则直接判定为合法*/
  var key;
  val = new_val || val;
  if(!rule.required && !val)
  return true;

  var key;
  var (key in rule) {
    /*防止重复现象出现*/
if(key === 'required')
    continue;
    /*调用rule的相对应的方法*/
    var r = this['validata_'+key]();
   if (!r) return false;
  }

  return true;
}

    this.validata_max = function(){
    pre_max_max();}
      return val <=rule.max;
   }
      window.validator = function(val, rule) {
        this.validata_min = function(){
          pre_max_min();}
          return val >=rule.min;
        }

        window.validator = function(val, rule) {
          this.validata_maxlength = function(){
             pre_length();}
            return val.length =<rule.maxlength;
          }

          window.validator = function(val, rule) {
            this.validata_minlength = function(){
              v pre_length();
              return val.length >= rule.minlength;
            }

          this.validata_numeric = function () {
            return $.isNumeric(var);
          }

          this.validata_required= function(){
            var real  = $.trim(var)
            if(!real && real !==0) {return false;
            return false;}
            return turn;
          }
          this.validata_pattern= function(){
            var reg=new RegExp(rule.pattern);
             return  reg.test(val);
          }
            /*用于完成this.validata_max 或 this.validata_min*/
            function pre_max_min{
            val = parseFloat(var);

            /*用于完成this.validata_maxlength 或 this.validata_minlength*/
            function pre_length{
            val = val.toString();
          }
    }
  }

  })
