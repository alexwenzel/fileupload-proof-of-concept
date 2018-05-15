Vue.use('vue-clip');

var app = new Vue({
    el: '#app',
    data: {
        firstname: '',
        lastname: '',
        options: {
            url: '/upload',
            paramName: 'file'
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
        }
    }
});
