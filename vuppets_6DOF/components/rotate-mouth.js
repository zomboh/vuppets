AFRAME.registerComponent('rotate-mouth', {

  schema: {
    target: {
      type: 'selector'
    },
    controllerId: {
      type: 'selector'
    },
    degrees: {
      type: 'number',
      default: 30
    },
    initialPos: {
      type: 'string',
      default: 'open'
    }
  },

  init: function () {
    var data = this.data;
    var targetEl = data.target || this.el;
    targetEl.addEventListener('model-loaded', this.doStuff.bind(this) );
  },
  
  doStuff: function () {
    
    var data = this.data;
    var myTarget = data.target || this.el;
    var controller = data.controllerId || this.el;
    var threeObj = myTarget.getObject3D('mesh');
/*     threeObj.traverse( function (node) {
      console.log(node.type + ' : ' + node.name);
    }); */
    var bone_mouth = threeObj.getObjectByName('setup_body_mouth');
/*     console.log(this.el);
    console.log(THREE.Math.radToDeg(bone_mouth.rotation.x)); */
    if (bone_mouth) {
      if (data.initialPos === 'open') {
        bone_mouth.rotation.x -= data.degrees;
      }
      var initialRotValue = bone_mouth.rotation.x;
    }

    controller.addEventListener('triggerchanged', function (e) {
      var rotationValue = Math.round(e.detail.value*data.degrees);
      var rotationValueRad = THREE.Math.degToRad(rotationValue);
      bone_mouth.rotation.x = initialRotValue + rotationValueRad;
      //console.log(bone_mouth.rotation.x);
    });

  }
});
