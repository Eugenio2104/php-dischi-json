
const { createApp } = Vue;


createApp({
  data() {
    return {
      apiUrl: "server.php",
      discs: []

    }
  },
  methods: {
    getDiscList() {
      axios.get(this.apiUrl)
        .then(risp => {
          console.log(risp.data);
          this.discs = risp.data;
        })
    }
  },
  mounted() {
    this.getDiscList();
  }
}).mount('#app')