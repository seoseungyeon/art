setpage = function(pageIndex) {

  //deactive all links
  $('.link').removeClass('active');
  //active selected link
  $('#link' + pageIndex).addClass('active');

  
}
