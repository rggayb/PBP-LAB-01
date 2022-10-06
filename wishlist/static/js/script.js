$(document).ready(function () {
    $.get("{% url 'wishlist:show_json' %}", function (data) {
      $.each(data, function (index, value) {
        $("#table-wishlist").append(
          "<tr><td>" +
            value.fields.nama_barang +
            "</td><td>" +
            value.fields.harga_barang +
            "</td><td>" +
            value.fields.deskripsi +
            "</td></tr>"
        );
      });
    });

    $("#wishlist-form").submit(function (e) {
      e.preventDefault();
      var nama_barang = $("#nama_barang").val();
      var harga_barang = parseInt($("#harga_barang").val());
      var deskripsi = $("#deskripsi").val();
      $.ajax({
        type: "POST",
        url: "{% url 'wishlist:add_wishlist' %}",
        data: {
          nama_barang: nama_barang,
          harga_barang: harga_barang,
          deskripsi: deskripsi,
        },
        success: function (response) {
          $("#table-wishlist").append(
            "<tr><td>" +
              nama_barang +
              "</td><td>" +
              harga_barang +
              "</td><td>" +
              deskripsi +
              "</td></tr>"
          );
        },
        error: function (error) {
          console.log(error);
        },
      });
    });
  });