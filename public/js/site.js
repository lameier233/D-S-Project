var siteInfor = new Vue({
  el: '#siteMain',
  data: {
    site: [ ]
  },

  methods: {
    handleCommentPost(e) {
      e.preventDefault();

      const s = JSON.stringify (this.commentForm);
      console.log(s);
      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( function(response) {
        console.log(response);
        return response.json();
      })
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      this.commentForm = this.getEmptyCommentForm();
    },

    getEmptyCommentForm(){
      return{
        comment:null
      }
    },
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.comment = json} )
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })
  }
})
