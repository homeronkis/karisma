new Vue({
    el: "#service",
    data: {
        currentView: 'link_1'
    },
    components: {
        link_1: {
            template: '#link_1_template'
        },
        link_2: {
            template: '#link_2_template'
        },
        link_3: {
            template: '#link_3_template'
        },
        link_4: {
            template: '#link_4_template'
        },
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    }
})
