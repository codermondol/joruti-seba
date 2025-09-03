
document.getElementById('btn-heart-click').addEventListener('click', function(){
    const heartEl = document.getElementById('available-heart');

    const currentCount = parseInt(heartEl.innerText, 10);

    if (currentCount === 0) {
      heartEl.innerText = 1; // Add 1
    } else {
      heartEl.innerText = 0; // Remove 1
    }
    
    
    
})