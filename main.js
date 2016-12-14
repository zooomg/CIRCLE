window.onload = function () {
  console.log("2");
  Vue.component('circle-item', {
    props: ['circle'],
    template: '<img class="ui medium circular image" :src="circle.text" alt="" />'
  })
  var app7 = new Vue({
    el: '#circle',
    data: {
      circles: [
        { text: '../Downloads/joe.jpg' },
        { text: '../Downloads/tom.jpg' },
        { text: '../Downloads/nan.jpg' }
      ]
    }
  })
}