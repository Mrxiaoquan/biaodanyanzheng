$(function(){
  'use strict';
  window.input = function(selector){
    var $ele;
    ,me =this;
    , rule  = {required:true};

     this.load_validator=function(var,rule){
       var val=this.get_val();
       this.validator=new   validator(val,rule);
     }

this.get_val=function(){
  return $ele.val();
}

    function init(){
     find_ele();
     parse_rule();
     me.load_validator();
     listen()；
     function listen(){
       $ele.on('change',function(){
         var r = me.validator.is_valid(me.get_val());
         console.log('valid',r)
       })
     }
    }
    function find_ele(){
      if(selector instanceof jQuery){
        $ele=selector;
      }else {
        $ele=$(selector);
      }
    }
  function  parse_rule(){
    var i=0
    var rule_string=$ele.data('rule');
    if(!rule_string) return;

    var rule_arr = rule_string.split('|');//['min:18',minlength:10]
    for(var i=0 ;i<rule_arr.length; i++)  {
      var item_str = rule_arr[i];
      war=item_arr = item.split(':');     //['min','18']
      rule[item_arr[0]] = JSON.parse(item_arr[1]);//{min:18}
    }
  }
    init();
  }

});
