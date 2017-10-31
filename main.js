class Post {
  constructor(name, title, year) {
    this.name = name;
    this.title = title;
    this.year = year;
  }
}

var app = new Vue({
  el: "#app",
  data: {
    postlist: [
        new Post (
        'Parth Bhavasr',
        'the favoirate one',
        '2010'
        ),
        new Post (
        'Chetan Aamle',
        'the favoirate two',
        '2016'
        ),
        new Post (
        'Rutika dabholkar',
        'the favoirate three',
        '2018'
        ),
        new Post (
        'Madhav Sarkar',
        'Coral Sans',
        '2019'
        )
    ]
  },
  methods: {
    getthename: function(e) {
      console.log(e.currentTarget);
    }
  }
});
