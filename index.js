// Based heavily on various answers given in
// http://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
function clearAllCookies() {
  var clearAllPaths = function(cookieBase) {
    var p = location.pathname.split('/');
    document.cookie = cookieBase + '; path=/';
    while (p.length > 0) {
      document.cookie = cookieBase + '; path=' + p.join('/');
      p.pop();
    };
  }
  
  var cookies = document.cookie.split("; ");
  for (var c = 0; c < cookies.length; c++) {
    var encodedCookieName = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]);
    var cookieBase = encodedCookieName + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT';
    clearAllPaths(cookieBase);
    
    var d = window.location.hostname.split(".");
    while (d.length > 0) {
      clearAllPaths(cookieBase + '; domain=' + d.join('.'));
      d.shift();
    }
  }
}

module.exports = clearAllCookies;
