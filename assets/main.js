const url = 'https://test.sbtravelsandtours.com/wp-json/wp/v2/posts';
var app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'hellow world',
      posts: [],
    };
  },
  async mounted() {
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    this.posts = result;
  },
});
