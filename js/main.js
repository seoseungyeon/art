setpage = function(pageIndex) {

  //deactive all links
  $('.link').removeClass('active');
  //active selected link
  $('#link' + pageIndex).addClass('active');


  var s = '';
  switch (pageIndex) {

    case 2:
      s += '<img src="image/venusBed/venusBed01.png"/><br><br>'
      s += '<img src="image/venusBed/venusBed02.png"/><br><br>'
      s += '<img src="image/venusBed/venusBed03.png"/><br><br>'
      s += '<img src="image/venusBed/venusBed04.png"/><br><br>'
      s += '<img src="image/venusBed/venusBed05.png"/><br><br>'
      s += '<img src="image/venusBed/venusBed06.png"/><br><br>'
      s += '<img src="image/venusBed/venusBed07.png"/><br><br>'

      break;

    case 3:
      s += '<img src="image/hers/hers01.png"/><br><br>'
      s += '<img src="image/hers/hers02.png"/><br><br>'
      s += '<img src="image/hers/hers03.png"/><br><br>'

      break;

    case 4:
      s += '<img src="image/newNormal/newNormal01.png"/><br><br>'
      s += '<img src="image/newNormal/newNormal02.png"/><br><br>'
      s += '<img src="image/newNormal/newNormal03.png"/><br><br>'
      s += '<img src="image/newNormal/newNormal04.png"/><br><br>'

      break;

    case 5:
      s += '<img src="image/happyFamily/happyFamily01.png"/><br><br>'
      s += '<img src="image/happyFamily/happyFamily02.png"/><br><br>'
      s += '<img src="image/happyFamily/happyFamily03.png"/><br><br>'
      s += '<img src="image/happyFamily/happyFamily04.png"/><br><br>'
      s += '<img src="image/happyFamily/happyFamily05.png"/><br><br>'
      s += '<img src="image/happyFamily/happyFamily06.png"/><br>'

      break;

    case 7:
      s += '<img src="image/seal/seal01.png"/><br><br>'
      s += '<img src="image/seal/seal02.png"/><br><br>'

      break;

    case 8:
      s += '<img src="image/minister/minister01.png"/><br><br>'
      s += '<img src="image/minister/minister02.png"/><br><br>'
      s += '<img src="image/minister/minister03.png"/><br><br>'

      break;

    case 10:
      s += '<img src="image/silence/silence.png"/><br>'

      s += '남들보다 앞서길, 그렇지만 남들보다 다르지 않길 바란다.<br>'
      s += '정상을 갈망하는 사회는 자꾸만 누군가를 지운다.<br>'
      s += '존재를 삭제하고 목소리를 침묵시킨다.<br>'
      s += '지우고 삭제하고 침묵시키는 것들에게 보여주고 싶었다.<br>'
      s += '이제 속이 시원하냐고<br><br>'

      s += 'Better than others, but be not different than others.<br>'
      s += 'Society desired "normal" always erase certain individuals.<br>'
      s += 'Delete the exist and Make the voice be silenced.<br>'
      s += 'want to show it for one who erasing, deleting, making silence.<br>'
      s += 'Do you feel okay now?'
      break;

    case 97:
      s += '서승연 (Seo Seung Yeon)<br>';
      s += '이화여자대학교 조소<br>';
      s += 'Goldsmiths Unversity MFA fine art';
      break;
  }

  $('#pageContent').html(s);


}
