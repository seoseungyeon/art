setpage = function(pageIndex) {

  //deactive all links
  $('.link').removeClass('active');
  //active selected link
  $('#link' + pageIndex).addClass('active');


  var s = '';
  switch (pageIndex) {

      break;


    case 4:
      s += '<img src="image/newNormal/newNormal01.png"/><br><br>'
      s += '<img src="image/newNormal/newNormal02.png"/><br><br>'
      s += '<img src="image/newNormal/newNormal03.png"/><br><br>'
      s += '<img src="image/newNormal/newNormal04.png"/><br><br>'

      break;


    case 10:
      s += '<img src="image/silence/silence.png"/><br><br>'
      
       break;
      
    case 11:
      s += '<video width="400" height="320" controls>
            <source src="https://www.youtube.com/watch?v=uiTWP6_ze4s&t=19s">
           </video>
      break;
     
     case 12:
      s += '<video width="400" height="320" controls>
            <source src="https://www.youtube.com/watch?v=68fxRwDWnB4">
           </video>
     
      break;
    
    case 97:
      s += '서승연 (Seo Seung Yeon)<br>';
      s += '이화여자대학교 조소<br>';
      s += 'Goldsmiths Unversity MFA fine art';
      break;
  }

  $('#pageContent').html(s);


}
