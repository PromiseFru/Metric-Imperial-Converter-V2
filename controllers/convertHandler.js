/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    if(!input) return input = 1;
    var unitIndex = input.search('[a-zA-Z]');
    var num = input.substring(0, unitIndex);
    if(num.length == 0) num = '1';
    if(num.split(/\//).length > 2) return result = 'invalid number'
    result = eval(num);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    if(!input) return result = 'no unit'
    var unitIndex = input.search('[a-zA-Z]');
    var unit = input.substring(unitIndex, input.length);
    result = unit.toLowerCase();
    if(unitIndex == -1) return result = 'no unit';

    var units = ['gal','l','mi','km','lbs','kg'];
    var foundUnit = units.indexOf(result);
    if(foundUnit >= 0){
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
        var result = Number(solver.toFixed(5));
        return result;
        break;
      }
      case('l'):{
        var solver = initNum / galToL;
        var result = Number(solver.toFixed(5));
        return result;
        break;
      }
      case('mi'):{
        var solver = initNum * miToKm;
        var result = Number(solver.toFixed(5));
        return result;
        break;
      }
      case('km'):{
        var solver = initNum / miToKm;
        var result = Number(solver.toFixed(5));
        return result;
        break;
      }
      case('lbs'):{
        var solver = initNum * lbsToKg;
        var result = Number(solver.toFixed(5));
        return result;
        break;
      }
      case('kg'):{
        var solver = initNum / lbsToKg;
        var result = Number(solver.toFixed(5));
        return result;
        break;
      }
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var string = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    var result = string;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
