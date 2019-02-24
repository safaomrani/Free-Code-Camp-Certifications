function checkCashRegister(price, cash, cid) 
{
  let registerOutput = { status: null, change : [] };
  
  // total amount in cash drawer
  let money = moneyInRegister(cid);
 
  // due change
  let changeDue = Math.round((cash - price) * 100) / 100;
 
  // compare the total cashInDraw with the change due 
  if ( money < changeDue)
  {
      registerOutput.status = 'INSUFFICIENT_FUNDS';
      return registerOutput;
  } 

  if (money === changeDue) 
  {
      registerOutput.status = 'CLOSED';
      registerOutput.change = cid;
      return registerOutput;
  } 
  
  if (money > changeDue) 
  {
    let changeArr = cashLeftInRegister(changeDue,cid);
   
        if (changeDue > moneyInRegister( changeArr) )
        {
          registerOutput.status = 'INSUFFICIENT_FUNDS';
        } else {
          registerOutput.status = 'OPEN';
          registerOutput.change = changeArr;
        }
        return registerOutput;
  }
}

// Cash left in the register
function cashLeftInRegister(changeDue, cid)
{
  let change = [];
  const currencyUnit = { 
    "PENNY" : 0.01,
    "NICKEL" :0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100 } ;
  
  for(let i = cid.length -1; i >= 0; i--)
  {
      const currencyTotal = cid[i][1];
      const currencyName = cid[i][0];
      const currencyValue = currencyUnit[currencyName];
      
      let currencyNumberInDrawer = Math.round((currencyTotal/currencyValue)*100)/100;
      
      let currencyNumber = 0;

      while( changeDue >= currencyValue && currencyNumberInDrawer>0)
      {
        changeDue = Math.round((changeDue - currencyValue )*100) /100;
        currencyNumber ++;
        currencyNumberInDrawer --;
        
      }

      if(currencyNumber > 0)
      {
        change.push([ currencyName, currencyNumber*currencyValue]);
      }
  }
  return change; 
}

// total amount in cash drawer
function moneyInRegister (cash)
{
  let money = 0; 
  for(let i = 0, l = cash.length; i < l; i++)
  {
    money +=  cash[i][1];
  }
  return Math.round(money * 100 ) / 100;
}


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

