var app = new Vue({
  el: '#design',
  data() {
    return {
      items: []
    }
  },
  beforeMount() {
    this.items = JSON.parse(localStorage.getItem('CRC')) || [];
  },
  methods: {
    setData(collection, prop, value) {
      collection[prop] = value;
      localStorage.setItem('CRC', JSON.stringify(this.items));
    },
    addItem() {
      this.setData(this, 'items', [this.item(), ...this.items])
    },
    addRespon(item) {
      this.setData(item, 'respon', [...item.respon, this.respon()])
    },
    addCollabo(item) {
      this.setData(item, 'collabo', [...item.collabo, this.collabo()])
    },
    item() {
      return {
        className: this.text('클래스명'),
        respon: [this.respon()],
        collabo: [this.collabo()]
      };
    },
    respon() {
      return this.text('책임');
    },
    collabo() {
      return this.text('연관 클래스');
    },
    text(txt) {
      return {text: txt, modify: false}
    },
    toggleMode(prop) {
      this.setData(prop, 'modify', !prop.modify);
    },
    removeItem(item){
      this.setData(this, 'items', this.reject(this.items, item));
    },
    removeRespon(item, prop) {
      this.setData(item, 'respon', this.reject(item.respon, prop));
    },
    removeCollabo(item, prop) {
      this.setData(item, 'collabo', this.reject(item.collabo, prop));
    },
    reject(collection, value) {
      return collection.filter(v => v != value);
    }
  }
});