var notesInfor = new Vue({
  el: '#notesMain',
  data: {
    notes: [ ],
    notesForm: {}
  },

  methods: {
  handleNotesPost(e) {
    e.preventDefault();
    var tempQ = window.location.href.indexOf("=",0);
    console.log(window.location.href);
    console.log(tempQ);
    console.log(typeof this.notesForm);
    console.log(window.location.href.slice(tempQ + 1,tempQ + 2));
    this.notesForm.clientId = window.location.href.slice(tempQ + 1,tempQ + 2));
    const s = JSON.stringify (this.notesForm);
    console.log(s);
    // POST to remote server
    fetch('api/notes.php', {
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
    .then( json => {notesInfor.notes.push(json)})
    .catch( err => {
      console.error('Note Post Error:');
      console.error(err);
    })

    this.notesForm = this.getEmptyNotesForm();
  },

  getEmptyNotesForm(){
    return{
      clientId:null,
      notes:null
    }
  },
},

  created () {
    // Do data fetch
  const url = new URL(window.location.href);
  const clientId = url.searchParams.get('clientId');
  console.log('Notes: '+ clientId);
  this.clientId = clientId;

  fetch('../api/notes.php?clientId='+clientId)
    .then( response => response.json() )
    .then( json => {notesInfor.notes = json} )
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })
    }

})
