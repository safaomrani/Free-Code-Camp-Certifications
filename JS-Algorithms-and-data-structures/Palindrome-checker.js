function palindrome(str) {
 
  let newstr = str.toLowerCase().replace(/\W+/g, '').replace(/_/g, '');

  if( newstr.split('').reverse('').join('') === newstr)
  {
    return true;
  } else {
    return false;
  }
}

palindrome("_eye");