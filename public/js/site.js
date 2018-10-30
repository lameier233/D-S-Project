var siteInfor = new Vue({
  el: '#siteMain',
  data: {
    site: [ ],
    siteForm: {}
  },

  methods: {
    /*
    handleNotesPost(e) {
      e.preventDefault();
      var tempQ = window.location.href.indexOf("=",0);
      this.siteForm.clientId = window.location.href.slice(tempQ + 1,tempQ + 2);
      const s = JSON.stringify (this.siteForm);
      // POST to remote server
      fetch('api/site.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( function(response) {
        //console.log(response);
        return response.json();
      })
      .then( json => {siteInfor.notes.push(json)})
      .catch( err => {
        console.error('Site Post Error:');
        console.error(err);
      })

      this.siteForm = this.getEmptySiteForm();
    },

  getEmptySiteForm(){
    return{
      clientId:null,
      site:null

    }
  },*/
    gotoTurbinesDeployed: function(s) {
    window.location = '/turbineDeployed.html?siteId=' + s;
  }
},

created () {
    const url = new URL(window.location.href);
    const clientId = url.searchParams.get('clientId');
    //console.log('Notes: '+ clientId);
    this.clientId = clientId;

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('/api/site.php?clientId='+clientId)
    .then( response => response.json() )
    .then( json => {siteInfor.site = json} )
    .catch( err => {
      console.log('SITE FETCH ERROR:');
      console.log(err);
    })
  }
})
