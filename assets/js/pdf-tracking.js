<script src="/assets/js/pdf-tracking.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href$=".pdf"]').forEach(function(link) {
    link.addEventListener('click', function() {
      const fileName = link.getAttribute('href').split('/').pop();
      gtag('event', 'pdf_download', {
        'file_name': fileName
      });
    });
  });
});
</script>
