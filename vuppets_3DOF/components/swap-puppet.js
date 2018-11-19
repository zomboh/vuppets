AFRAME.registerComponent('swap-puppet', {

  schema: {
    target: {
      type: 'selector'
    }
  },

  init: function () {

    this.currentPuppet = 0;

    var egghead = {
      model: "#egghead",
      "rotate-mouth": "controllerId: #controller; degrees: 45; initialPos: open"
    }

    var stickman = {
      model: "#stickman",
      "rotate-mouth": "controllerId: #controller; degrees: 45; initialPos: closed"
    }

    this.puppets = [ stickman, egghead ];

    this.el.addEventListener('trackpaddown', this.swapPuppet.bind(this) );

  },

  swapPuppet: function () {

    this.currentPuppet++;
    if (this.currentPuppet >= this.puppets.length) this.currentPuppet = 0;
    this.data.target.setAttribute("gltf-model", this.puppets[this.currentPuppet].model);
    this.data.target.setAttribute("rotate-mouth", this.puppets[this.currentPuppet]["rotate-mouth"]);



  }
});
