new Vue({
    el: '#vue-app',
    data: {
        name: 'Virak',
        job: 'Mighty Guardian',
        website: 'https://www.google.com.kh/',
        websiteTag: '<a href="https://www.youtube.com/">YouTube</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name;
        }
    }
});