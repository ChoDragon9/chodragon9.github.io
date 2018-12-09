var app = new Vue({
  el: '#design',
  methods: {
    addItem() {
      this.items = [this.item(), ...this.items]
    },
    item() {
      return {
        className: this.text('클래스명'),
        respon: [this.text('책임')],
        collabo: [this.text('연관 클래스')]
      };
    },
    text(txt) {
      return {text: txt, modify: false}
    },
    toggleMode(prop) {
      prop.modify = !prop.modify;
    },
    addRespon(item) {
      item.respon.push(this.text('책임'));
    },
    addCollabo(item) {
      item.collabo.push(this.text('연관 클래스'));
    },
    removeItem(item){
      this.items = this.items.filter(v => v != item);
    },
    removeRespon(item, prop) {
      item.respon = item.respon.filter(v => v != prop);
    },
    removeCollabo(item, prop) {
      item.collabo = item.collabo.filter(v => v != prop);
    }
  },
  data: {
    items: []
  }
});