const app = new Vue({
    el: "#app",
    data: {
        albums: [],
        fineCaricamento: false,
    },
    created() {
        axios.get("./backend.php")
        .then((response) => {
            this.albums = response.data;
            this.fineCaricamento = true;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
});