setpage = function(pageIndex) {

  //deactive all links
  $('.link').removeClass('active');
  //active selected link
  $('#link' + pageIndex).addClass('active');


  var s = '';
  switch (pageIndex) {
    case 97:
      s += '서승연 (Seo Seung Yeon)<br>';
      s += '이화여자대학교 조소<br>';
      s += 'Goldsmiths Unversity MFA fine art';

      break;
  }

  $('#pageContent').html(s);


}
