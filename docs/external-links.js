document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href]").forEach(function(link) {

    const url = link.href;

    if (
      url.startsWith("http") &&
      !url.includes(window.location.hostname)
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }

    if (url.toLowerCase().endsWith(".pdf")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }

  });
});