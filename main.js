document.addEventListener("DOMContentLoaded", function(){
    openMenu = document.querySelector('.icon-toggle');
    closeMenu = document.querySelector('.icon-close');
    openSub= document.querySelector('.openSub');
    nav = document.querySelector('.nav');
    btnNext = document.querySelector('.btnn-next');
    btnPrev = document.querySelector('.btnn-prev');
    slides = document.querySelectorAll('.slides .slide');
    var indexCurrent = 0;
    var statusSlide = 'standing';
    openMenu.onclick = function(){
        nav.classList.add('active');
        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 27) {
                nav.classList.remove('active');
            }
        });
    }
    closeMenu.onclick = function(){
        nav.classList.remove('active');
    }
    openSub.onclick = function(){
        this.classList.toggle('clicked');
        if(formAccount.classList.contains('open')){
            formAccount.classList.remove('open');
        }
        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 27) {
                openSub.classList.remove('clicked');
            }
        });
    }
     
    //click open form account
    btnUser = document.querySelector('.btn-user');
    formAccount = document.querySelector('.form-account');
    btnUser.onclick = function(){
        formAccount.classList.toggle('open');
        if(openSub.classList.contains('clicked')){
            openSub.classList.remove('clicked');
        }
        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 27) {
                formAccount.classList.remove('open');
            }
        });
        window.onclick = function(event) { 
           if(event.target != btnUser ) {
            formAccount.classList.remove('open');
           }
        } 
    }
   
    

    //slideShow
    //movementForNext
    
    var movementForNext= function(event){
        if(statusSlide== 'moving'){return false}
        statusSlide = 'moving';
        var countMovement = 0;
    var slideQty = slides.length;
    var eleCurrent = slides[indexCurrent];
    if(indexCurrent < slideQty - 1)
        {
            indexCurrent = indexCurrent +1;
        }
        else{indexCurrent = 0 }
    var eleNext = slides[indexCurrent];
    var nextOut = function(){
        this.classList.remove('active');
        this.classList.remove('nextOut');
        countMovement++;
        if(countMovement == 2){statusSlide ='standing' }
    }
    var nextIn = function(){
        this.classList.remove('nextIn');
        this.classList.add('active');
        countMovement++;
        if(countMovement == 2){statusSlide ='standing' }
    }
    eleCurrent.addEventListener('webkitAnimationEnd',nextOut);
    eleNext.addEventListener('webkitAnimationEnd',nextIn);
    eleCurrent.classList.add('nextOut');
    eleNext.classList.add('nextIn');
    }
    btnNext.addEventListener('click', movementForNext)
    //movementForPrev
    var movementForPrev= function(){
        if(statusSlide== 'moving'){return false}
        statusSlide = 'moving';
        var countMovement = 0;
    var slideQty = slides.length;
    var eleCurrent = slides[indexCurrent];
    if(indexCurrent >0)
        {
            indexCurrent--;
        }
        else{indexCurrent = (slideQty-1) }
    var eleNext = slides[indexCurrent];
    var prevOut = function(){
        this.classList.remove('active');
        this.classList.remove('prevOut');
        countMovement++;
        if(countMovement == 2){statusSlide ='standing' }
    }
    var prevIn = function(){
        this.classList.remove('prevIn');
        this.classList.add('active');
        countMovement++;
        if(countMovement == 2){statusSlide ='standing' }
    }
    eleCurrent.addEventListener('webkitAnimationEnd',prevOut);
    eleNext.addEventListener('webkitAnimationEnd',prevIn);
    eleCurrent.classList.add('prevOut');
    eleNext.classList.add('prevIn');
    }
    btnPrev.addEventListener('click', movementForPrev);
    //autoslide after 5s
    var slideInterval = setInterval(movementForNext,5000);
    // stop auto slide when user click
    btnNext.addEventListener('click',()=>{
        clearInterval(slideInterval);
      });
    btnPrev.addEventListener('click',()=>{
        clearInterval(slideInterval);
    });
},false)