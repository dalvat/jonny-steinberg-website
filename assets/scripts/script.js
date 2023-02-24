$("#navbarSupportedContent").on('show.bs.collapse', function() {
  $('a.nav-link').click(function() {
    if (!$('#dropdown-button')) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });
  $('a.dropdown-item').click(function() {
    $("#navbarSupportedContent").collapse('hide');
  });
  $('a.navbar-brand').click(function() {
    $("#navbarSupportedContent").collapse('hide');
  });
});