require({
  locale: 'spa'
}, ['i18n!nls/str'], function (str) {
  window.onload = function () {
    document.getElementById('welcome').innerHTML = str.welcome;
    document.getElementById('idiom').innerHTML = str.eng_only_idiom;
    document.getElementById('phrase').innerHTML = str['Watch your phraseology'];
  };
});