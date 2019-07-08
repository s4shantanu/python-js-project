var app = new Vue({
    el: '#app',
    data: {
        apiUrl: 'https://reqres.in/api/users',
        users: [],
        totalPages: 0,
        page: 1
    },
    methods: {
        getUsers() {
            axios.get(this.apiUrl + '?page=' + this.page)
                .then(response => {
                    this.users = [];
                    for (var ind in response.data.data) {
                        this.users.push(response.data.data[ind]);
                    }

                    this.totalPages = response.data.total_pages;
                })
                .catch(response => {
                    console.log(response);
                });
        },
        setPage(page) {
            this.page = page;
        }
    },
    created() {
        this.getUsers();
    },
    watch: {
        page () {
            this.getUsers();
        }
    }

})