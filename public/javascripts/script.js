/*global Vue*/
/*global axios*/




var app = new Vue({
  el: '#app',
  data: {
    budgetCategories: [],
    category: '',
    allotment: '',
  },
  created: function() {
    this.getItems();
  },
  
  method: {
    openForm(formId) {
      document.getElementById(formId).style.display = "block";
    },
    
    closeForm(formId) {
      document.getElementById(formId).style.display = "none";
    },
    deleteItem(item) {
      
    },
    addItem(item) {
      
    },
    async getItems() {
        try {
          const response = await axios.get("/api/items");
          this.items = response.data;
        } catch (error) {
          console.log(error);
        }
      },
    }
  
});