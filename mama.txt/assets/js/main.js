document.addEventListener('DOMContentLoaded', function() {
    const btnUp = document.getElementById('btn-up');
    let isHidden = true; // флаг, указывающий, что кнопка в данный момент скрыта
  
    function showBtnUp() {
      if (window.scrollY > 100) {
        btnUp.style.display = 'block';
        setTimeout(function() {
          btnUp.style.opacity = '1';
        }, 10);
        isHidden = false; // кнопка сейчас не скрыта
      } else {
        if (!isHidden) { // если кнопка была видимой
          btnUp.style.opacity = '0';
          setTimeout(function() {
            btnUp.style.display = 'none';
          }, 300);
          isHidden = true; // кнопка снова скрыта
        }
      }
    }
  
    window.addEventListener('scroll', showBtnUp);
  
    btnUp.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
});
