Vue.use('vue-clip');

var app = new Vue({
    el: '#app',
    data: {
        firstname: '',
        lastname: '',
        uploadedImage: null,
        options: {
            url: '/app.php/uploadfile',
            paramName: 'image'
        }
    },
    methods: {
        onClickSubmit: function () {

            if (confirm("Ausweis erstellen?")) {
                $.ajax({
                    type: "POST",
                    url: "http://whatever.com/api/wuff",
                    data: $('form').serialize(),
                    success: function () {
                        alert('success');
                    },
                    error: function () {
                        alert('fehler');
                    }
                });
            }
        },
        onFileUploadComplete: function (file, status, xhr) {
            console.log(file, status, xhr);

            var data = JSON.parse(xhr.response);
            this.uploadedImage = data.image_path;
        }
    }
});
