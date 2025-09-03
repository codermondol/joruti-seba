// Functaion Heart Click

function heartClicked(id){
    let liked = false;
document.getElementById(id).addEventListener('click', function () {
    const heartEl = document.getElementById('available-heart');
      let count = parseInt(heartEl.innerText);

      if (liked === false) {
        heartEl.innerText = count + 1; 
        liked = true;
      } else {
        heartEl.innerText = count - 1; 
        liked = false;
      }
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



