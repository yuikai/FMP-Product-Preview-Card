const app = new Vue({
  el: '#app',
  data: {
    type: 'Perfume',
    productName: 'Gabrielle Essence Eau De Parfum',
    productDesc: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    originalPrice: 169.99,
    discountPrice: 149.99,
  },
  computed: {
    displayType() {
      return this.type.toUpperCase();
    }
  },
});