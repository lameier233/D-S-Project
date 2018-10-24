var notesInfor = new Vue({
  el: '#notesMain',
  data: {
    notes: []
  },

  created () {
  // Do data fetch
const url = new URL(window.location.href);
const client.id = url.searchParams.get('client.id');
console.log('Notes: '+ client.id);
this.client.id = client.id;
}
