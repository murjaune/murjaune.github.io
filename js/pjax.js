$(document).on('click','.is-pjax',(e)=>{
  e.preventDefault();
  const _self:HTMLElement = e.target;
  const href = $(_self).attr('href');
 
  $.pjax({
    container : '#before-contents', //前のコンテンツ
    fragment: '#after-contents', //後のコンテンツ
    url : href
  });
});
