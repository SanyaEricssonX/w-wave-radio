window.addEventListener('DOMContentLoaded', function () {
  // селект
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });

  // аккордеон
  $(function () {
    $("#accordion").accordion({ heightStyle: "content", collapsible: true});
  });

  
})
