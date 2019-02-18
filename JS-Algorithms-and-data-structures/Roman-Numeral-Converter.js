function convertToRoman(num) {

  let romanArr = ['M' , 'CM' , 'D', 'CD', 'C' , 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let decimalArr = [1000 , 900 , 500, 400 , 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanNum = "";

  for (let i = 0; i < romanArr.length; i++) 
  {
      while(num >= decimalArr[i])
      {
          romanNum += romanArr[i];
          num -= decimalArr[i];
      }
   }
return romanNum;
}