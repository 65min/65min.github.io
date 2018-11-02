
/**
 * 生成复杂随机字符串
 * @param length
 * @returns {string}
 */
getComplexRandomID = function(length) {
  length = length || 16;
  var strings = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var stringArr = strings.split('');

  // 打乱字符顺序
  stringArr.sort(function (a, b) {
    return Math.random() - Math.random();
  });

  var resultStrArr = [];
  for(var i = 0; i < length; i ++) {
    resultStrArr.push(stringArr[parseInt(Math.random() * 63)]);
  }
  return resultStrArr.join('');
};

/* Thank you by
  http://www.alt-tag.com/blog/2006/02/ie-dom-bugs/ */
function createElement(type, name)
{
  var element = null;
  try {
    element = document.createElement('<'+type+' name="'+name+'">');
  } catch (e) {}
  if(element==null) {
    element = document.createElement(type);
    element.name = name;
  }
  return element;
}
