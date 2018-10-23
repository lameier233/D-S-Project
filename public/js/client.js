var clientInfor = new Vue({
  el: '#clientMain',
  data: {
    client: [ ],
    noteForm: {}
  },

  methods: {
      handleNotePost(e) {
        e.preventDefault();

        const s = JSON.stringify (this.noteForm);
        console.log(s);
        // POST to remote server
        fetch('api/clientPost.php', {
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
        .then( json => {this.note.push(json)})
        .catch( err => {
          console.error('NOTE POST ERROR:');
          console.error(err);
        })

        this.noteForm = this.getEmptyNoteForm();
      },

      getEmptyNoteForm(){
        return{
          note:null
        }
      },
    },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/client.php')
    .then( response => response.json() )
    .then( json => {clientInfor.client = json} )
    .catch( err => {
      console.log('CLIENT FETCH ERROR:');
      console.log(err);
    })
  }
})
