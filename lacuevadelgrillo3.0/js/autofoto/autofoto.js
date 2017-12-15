//https://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery
    $.ajax({
        url: "getImages.php",
        dataType: "json",
        success: function (data) {

            $.each(data, function(i,filename) {
                $('#imageDiv').prepend('<img src="'+ filename +'"><br>');
            });
        }
    });