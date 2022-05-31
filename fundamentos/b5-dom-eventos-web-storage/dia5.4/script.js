window.onload = function() {
  let buttonListColors = document.querySelectorAll('section#bg-color>button');
  for (let i = 0; i < buttonListColors.length; i += 1) {
    buttonListColors[i].addEventListener('click', function(){
      document.getElementById('paragraph').style.backgroundColor = buttonListColors[i].value;
      localStorage.setItem('backgroundColor', buttonListColors[i].value);
    })
  }

  let FontColorlist = document.querySelectorAll('section#font-color>button');
  for (let i = 0; i < FontColorlist.length; i += 1) {
    FontColorlist[i].addEventListener('click', function(){
      document.getElementById('paragraph').style.color = FontColorlist[i].value;
      localStorage.setItem('color', FontColorlist[i].value);
    })
  }

  let fontSizeList = document.querySelectorAll('section#font-size>button');
  for (let i = 0; i < fontSizeList.length; i += 1) {
    fontSizeList[i].addEventListener('click', function(){
      document.getElementById('paragraph').style.fontSize = fontSizeList[i].innerHTML;
      localStorage.setItem('fontSize', fontSizeList[i].innerHTML);
    })
  
  }

  let lineHeightList = document.querySelectorAll('section#line-height>button');
  for (let i = 0; i < lineHeightList.length; i += 1) {
    lineHeightList[i].addEventListener('click', function(){
      document.getElementById('paragraph').style.lineHeight = lineHeightList[i].innerHTML;
      localStorage.setItem('lineHeight', lineHeightList[i].innerHTML);
    })
  }

  let fontFamilyList = document.querySelectorAll('section#font-family>button');
  for (let i = 0; i < fontFamilyList.length; i += 1) {
    fontFamilyList[i].addEventListener('click', function(){
      document.getElementById('paragraph').style.fontFamily = fontFamilyList[i].innerHTML;
      localStorage.setItem('fontFamily', fontFamilyList[i].innerHTML);
    })

    let setBackground = localStorage.getItem('backgroundColor');
    document.getElementById('paragraph').style.backgroundColor = setBackground;

    let setFontColor = localStorage.getItem('color');
    document.getElementById('paragraph').style.color = setFontColor;

    let setFontSize = localStorage.getItem('fontSize');
    document.getElementById('paragraph').style.fontSize = setFontSize;

    let setLineHeight = localStorage.getItem('lineHeight');
    document.getElementById('paragraph').style.lineHeight = setLineHeight;

    let setFontFamily = localStorage.getItem('fontFamily');
    document.getElementById('paragraph').style.fontFamily = setFontFamily;
  }

  


}