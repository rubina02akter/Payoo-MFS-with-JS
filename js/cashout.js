document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
  event.preventDefault();
  console.log('cashout btn  clicked');

  const cashOut = document.getElementById('input-cash-out').value;
  const cashOutNumber = parseFloat(cashOut);
  const pinNumber = document.getElementById('input-cash-out-pin').value;
  console.log(cashOut,pinNumber);

  if(pinNumber === '1234'){
    console.log('money is reducinng');

    const balance = document.getElementById('account-balance').innerText;
    const balanceNUmber = parseFloat(balance);
    // reduce the balance
    const newBalance = balanceNUmber - cashOutNumber;

    // update the UI/DOM

    document.getElementById('account-balance').innerText = newBalance;


  }
  else {
    alert('Failed to cashout! please try again later.')
  }

})