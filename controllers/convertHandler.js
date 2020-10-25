/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var firstCharIndex = input.match('[a-zA-Z]').index;
    var result = input.slice(0, firstCharIndex);
    
    if(!result) return result = 1;
    if(result.match(/\d*\.?\d*\/\d*\.?\d*\/\d*\.?\d*/)){
      return result = 'invalid number';
    }else{
      return eval(result);
    }
  };
  
  this.getUnit = function(input) {
    var firstCharIndex = input.match('[a-zA-Z]').index;
    var result = input.slice(firstCharIndex).toLowerCase();
    var checkUnit = ['gal','l','mi','km','lbs','kg'];

    var unitIndex = checkUnit.indexOf(result);
    if(unitIndex >= 0){
      return result;
    }else{
      return result = "invalid unit";
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var checkUnit = ['gal','l','mi','km','lbs','kg'];
    var returnunit = ['l','gal','km','mi','kg','lbs'];
    var initUnitIndex = checkUnit.indexOf(initUnit);
    var result = returnunit[initUnitIndex];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var checkUnit = ['gal','l','mi','km','lbs','kg'];
    var spellUnit = ['gallons','liters','miles','kilometers','pounds','kilograms'];
    var unitIndex = checkUnit.indexOf(unit);
    var result = spellUnit[unitIndex];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(initUnit){
      case('gal'):{
        var solver = initNum * galToL;
        var result = solver;
        return result;
        break;
      }
      case('l'):{
        var solver = initNum / galToL;
        var result = solver;
        return result;
        break;
      }
      case('mi'):{
        var solver = initNum * miToKm;
        var result = solver;
        return result;
        break;
      }
      case('km'):{
        var solver = initNum / miToKm;
        var result = solver;
        return result;
        break;
      }
      case('lbs'):{
        var solver = initNum * lbsToKg;
        var result = solver;
        return result;
        break;
      }
      case('kg'):{
        var solver = initNum / lbsToKg;
        var result = solver;
        return result;
        break;
      }
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
