let adId = document.currentScript.getAttribute('data-ad');
    let rootId = document.currentScript.getAttribute('data-root');
    if(adId && rootId){
      let hide = 0;
      let marginAdBottom = 20; 
      let marginAdLeft = 20; 
      let marginCloseBottom = marginAdBottom + 300; 
      let marginCloseLeft = marginAdLeft + 250; 
      var root = document.getElementById(rootId);
      var ad = document.getElementById(adId);
      const closeBtn = document.createElement("button");
      closeBtn.id = adId + "-close-btn";
      closeBtn.style.setProperty('display', "none");
      closeBtn.style.setProperty('background', "linear-gradient(90deg,#000000,#000000 5px)");
      closeBtn.style.setProperty('border', "0");
      closeBtn.style.setProperty('padding', "4px");
      closeBtn.style.setProperty('border-radius', "25px");
      closeBtn.style.setProperty('color', "white");
      closeBtn.style.setProperty('font-size', "20px");
      closeBtn.setAttribute('aria-label','Close Ad');
      closeBtn.innerText = "X";
      ad.insertBefore(closeBtn, null);
      closeBtn.addEventListener('click',function (event) { 
        hide = 1;
        ad.style.setProperty('position', "inherit");
        closeBtn.style.setProperty('position', "inherit");
        closeBtn.style.setProperty('display', "none");
      });
      window.onscroll = function() {
          var distance =  root.getBoundingClientRect().top
          if(distance < 0 && hide == 0){
              ad.style.setProperty('position', "fixed");
              ad.style.setProperty('bottom', marginAdBottom + "px");
              ad.style.setProperty('left', marginAdLeft + "px");
              ad.style.setProperty('z-index', "10000000");
              closeBtn.style.setProperty('display', "inherit");
              closeBtn.style.setProperty('position', "fixed");
              closeBtn.style.setProperty('bottom', marginCloseBottom + "px");
              closeBtn.style.setProperty('left', marginCloseLeft + "px");
              closeBtn.style.setProperty('z-index', "10000000");
          } else {
              ad.style.setProperty('position', "inherit");
              closeBtn.style.setProperty('position', "inherit");
              closeBtn.style.setProperty('display', "none");
          }
      };
    }else{
      console.error('No data passed');
    }
