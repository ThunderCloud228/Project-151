// Registering Component in base-component.js
AFRAME.registerComponent('base', {
    schema: {
        radius: { type: "number", default: 15 } ,
        height: { type: "number", default: 3 }
    },

    init : function() {
        // Do something when component is first attached
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material", { color: "#1769aa" })
    }
});
