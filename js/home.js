// add money to the account

//step - 1 : add an event handler  to the add money button inside the form

document.getElementById('btn-add-money')
  .addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
   
// step-2: get money to be added to the account
   
    const addMoneyInput = document.getElementById('input-add-money').value;
  
// get the pin number provided

   const pinNumberInput = document.getElementById('btn-pin-number').value;

   console.log(addMoneyInput, pinNumberInput);
   
  // step-3: verify the pin number [not the right way]

  if(pinNumberInput === '1234'){
    console.log('adding money to your amount');

    // step-4: get the current balance
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    // step-5: add MoneyInput with balance

    const addMOneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance)
    const newBalance = addMOneyNumber + balanceNumber ;
    console.log(newBalance);

    //  step-6: update the balace in the UI/DOM

    document.getElementById('account-balance').innerText = newBalance;

    
  }
  else{
    alert('Failed to add money! Please try again');
  }



  })