// Registering component in foo-component.js
AFRAME.registerComponent('correct-gamma', {
  schema: {},
  init: function () {
    //console.log(this.el.renderer);
    renderer = this.el.renderer;
    renderer.gammaFactor = 2.2;
    renderer.gammaOutput = true;
  }
});