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
    if(result.match(/\/{2}/)){
      return result = 'invalid number';
    }else{
      return eval(result);
    }
  };
  
  this.getUnit = function(input) {
    var firstCharIndex = input.match('[a-zA-Z]').index;
    var result = input.slice(firstCharIndex)
    var checkUnit = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];

    var unitIndex = checkUnit.indexOf(result);
    if(unitIndex >= 0){
      return result;
    }else{
      return result = "invalid unit";
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var checkUnit = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var returnunit = ['l','gal','km','mi','kg','lbs','L','GAL','KM','MI','KG','LBS'];
    var initUnitIndex = checkUnit.indexOf(initUnit);
    var result = returnunit[initUnitIndex];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var checkUnit = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var spellUnit = ['gallons','liters','miles','kilometers','pounds','kilograms','gallons','liters','miles','kilometers','pounds','kilograms'];
    var unitIndex = checkUnit.indexOf(unit);
    var result = spellUnit[unitIndex];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(initUnit){
      case('gal'||'GAL'):{
        var solver = initNum * galToL;
        var result = solver;
        return result;
        break;
      }
      case('l'||'L'):{
        var solver = initNum / galToL;
        var result = solver;
        return result;
        break;
      }
      case('mi'||'MI'):{
        var solver = initNum * miToKm;
        var result = solver;
        return result;
        break;
      }
      case('km'||'KM'):{
        var solver = initNum / miToKm;
        var result = solver;
        return result;
        break;
      }
      case('lbs'||'LBS'):{
        var solver = initNum * lbsToKg;
        var result = solver;
        return result;
        break;
      }
      case('kg'||'KG'):{
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
