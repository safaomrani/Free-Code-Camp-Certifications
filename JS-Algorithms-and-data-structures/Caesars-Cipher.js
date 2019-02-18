function rot13(str) 
{ 
  //str = str.split("");
  let regex = /[A-Z]/; 
  let arrayCode = [];
  for(let i = 0; i < str.length; i++)
  {
    if (regex.test(str[i]) == true) 
    {
      arrayCode.push((str[i].charCodeAt() + 13 -65) % 26 +65) ;
    }
    else
    {
      arrayCode.push(str[i].charCodeAt());
    }
  }
  
  let newStr = decimalToText(arrayCode);
  return newStr;
}
