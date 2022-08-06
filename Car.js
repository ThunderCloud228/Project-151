// Registering Component in car-component.js
AFRAME.registerComponent('car', {
    schema: {
        model_ref: { type: "string", default: "./car/scene.gltf" }
    },

    init : function() {
        // Do something when component is first attached
        this.el.setAttribute("gltf-model", this.data.model_ref);
        
        const position = {x: 0, y:0.1, z:-5}

        this.el.setAttribute("position", position)
    }
});
