var app = new Vue({
  el: "#app",
  data: {
    headerImageStyle: {
      "background-image": "url('../../test/images/header.jpg')"
    },
    contracted: true,
    modalOpen: false,
    title: sample.title,
    address: sample.address,
    about: sample.about,
    amenities: sample.amenities,
    prices: sample.prices
  },
  watch: {
    modalOpen: function() {
      var className = "modal-open";
      if (this.modalOpen) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  }
});
