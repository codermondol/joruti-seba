// Functaion Heart Click

function heartClicked(id){
    let liked = false;
document.getElementById(id).addEventListener('click', function () {
    const heartEl = document.getElementById('available-heart');
      let count = parseInt(heartEl.innerText);

      if (liked === false) {
        heartEl.innerText = count + 1; 
        liked = true;
      } 
      return count;
});
}

heartClicked('btn-heart-item1');
heartClicked('btn-heart-item2');
heartClicked('btn-heart-item3');
heartClicked('btn-heart-item4');
heartClicked('btn-heart-item5');
heartClicked('btn-heart-item6');
heartClicked('btn-heart-item7');
heartClicked('btn-heart-item8');
heartClicked('btn-heart-item9');




// Call function

function callButtonAction(btn1, nameId, numberId){
    document.getElementById(btn1).addEventListener('click', function () {
        const callButton = document.getElementById(btn1);
        let coins = parseInt(document.getElementById('coins').innerText); // use let

        if (coins < 20) {
            alert('Not enough coins to make a call!');
            callButton.disabled = true;
            callButton.style.backgroundColor = 'gray';
            return;
        }

        // minus 20 coins
        coins = coins - 20;
        document.getElementById('coins').innerText = coins;

        // Call message
        const serviceName = document.getElementById(nameId).innerText;
        const serviceNumber = document.getElementById(numberId).innerText;
        alert(`Calling: ${serviceName} at ${serviceNumber}`);

        // Add to Call History
        const historyContainer = document.getElementById('call-history');
        const timeNow = new Date().toLocaleTimeString();

        const historyItem = document.createElement('div');
        historyItem.innerHTML = `
            <div class="flex items-center justify-between rounded-xl bg-neutral-50 px-3 py-3 ring-1 ring-neutral-200">
                <div class="min-w-0">
                    <p class="truncate text-[13px] font-medium text-neutral-900">${serviceName}</p>
                    <p class="text-[11px] text-neutral-500">${serviceNumber}</p>
                </div>
                <span class="shrink-0 text-[11px] text-neutral-500">${timeNow}</span>
            </div>
        `;

        historyContainer.append(historyItem);
    })
}

callButtonAction('btn-call-action1', 'service-name1', 'service-number1');
callButtonAction('btn-call-action2', 'service-name2', 'service-number2');
callButtonAction('btn-call-action3', 'service-name3', 'service-number3');
callButtonAction('btn-call-action4', 'service-name4', 'service-number4');
callButtonAction('btn-call-action5', 'service-name5', 'service-number5');
callButtonAction('btn-call-action6', 'service-name6', 'service-number6');
callButtonAction('btn-call-action7', 'service-name7', 'service-number7');
callButtonAction('btn-call-action8', 'service-name8', 'service-number8');
callButtonAction('btn-call-action9', 'service-name9', 'service-number9');


// Clear history function
    document.getElementById('clear-history').addEventListener('click', function(){
        document.getElementById('call-history').innerHTML = '';
    })