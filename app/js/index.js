var slideBox = (function(){
  if (!document.querySelector || !('classList' in document.body)) {
    return false;
  }
   //setting variables
  var box = document.querySelector('.slider');
      next = box.querySelector('.next');
      previous = box.querySelector('.previous');
      items = box.querySelectorAll(".content li");
      counter = 0;
      amount = items.length;
      current = items[0];
      box.classList.add('.active');

  //Navigate Function
  function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;

      if (direction === -1 && counter < 0){
        counter = amount - 1;
      }
      if (direction === 1 && !items[counter]){
      counter = 0;
      }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(){
  navigate(1);
  });
  previous.addEventListener('click', function(){
  navigate(-1);
  });
  navigate(0);
 })();
