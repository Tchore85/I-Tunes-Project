document.addEventListener("DOMContentLoaded", function() {
  $("#album-search").on("submit", function(event) {
    event.preventDefault();
    // $("#artist-name")
    $.ajax({
      method: "GET",
      url:
        "http://itunes.apple.com/search?entity=album&limit=6&term=" +
        $("#artist-name")
          .val() //the walue what we give
          .replace(/ /g, "+") // this will replace empty spaces with plus
          .toLowerCase(), //API is the sensitive on lower case, make all text lovercase
      dataType: "json"
    }).done(function(data) {
      console.log(data.results);
      $.each(data.results, function(key, value) {
        $(".album-list").append(
          `<li><img src =" ${value.artworkUrl60}"/>  ${value.collectionName}<li/>`
        );
      });
    });
  });
});
