setpage = function(pageIndex) {

  //deactive all links
  $('.link').removeClass('active');
  //active selected link
  $('#link' + pageIndex).addClass('active');


  var s = '';
  switch (pageIndex) {

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
      s += '서승연 Seo Seung Yeon<br><br>';
      s += '이화여자대학교 조소 Ewha Unuversuty BA Sculpture<br>';
      s += 'Goldsmiths Unversity MFA fine art<br><br><br>';
      
      s += '2016 Centennial of Modern Girls Season 1<br>'
      s += '2017 A timid Rebellion<br>'
      s += '2018 Centennial of Modern Girls Season 2<br>'
      
      break;
      
      case 98:
      s += 'seosy019@gmail.com<br>';
     
      break;
  }

  $('#pageContent').html(s);


}
