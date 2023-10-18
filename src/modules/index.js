export default {
    vModal: () => import(/* webpackChunkName: "vModal" */ "./Vue/VModel"),
    echart:() => import(/* webpackChunkName: "vModal" */ "./echart/index.vue"),
    vueSync: () => import(/* webpackChunkName: "vueSync" */ "./Vue/Sync"),
    vueSlot: () => import(/* webpackChunkName: "vueSlot" */ "./Vue/Slot"),
    vueTransition: () =>
        import(/* webpackChunkName: "vueTransition" */ "./Vue/Transition"),
    requestUtil: () =>
        import(/* webpackChunkName: "requestUtil" */ "./RequestUtil"),
    animationAnimation: () =>
        import(
            /* webpackChunkName: "animationAnimation" */ "./Animation/Animation"
        ),
    animationTransform: () =>
        import(
            /* webpackChunkName: "animationTransform" */ "./Animation/Transform"
        ),
    animationTransition: () =>
        import(
            /* webpackChunkName: "animationTransition" */ "./Animation/Transition"
        ),
        dragAndDrop: () =>
        import(/* webpackChunkName: "DragAndDrop" */ "./Undefined/DragAndDrop"),
        flexTable: () =>
        import(/* webpackChunkName: "FlexTable" */ "./Undefined/FlexTable"),
        clipboard: () =>
        import(/* webpackChunkName: "Clipboard" */ "./Other/Clipboard"),
        confirm: () =>
        import(/* webpackChunkName: "Confirm" */ "./Other/Confirm"),
        treeTableSummary: () =>
        import(/* webpackChunkName: "TreeTableSummary" */ "./Other/TreeTableSummary"),
        testAnother: () =>
        import(/* webpackChunkName: "TestAnother" */ "./Other/TestAnother/index.vue"),
        threejs: () =>
        import(/* webpackChunkName: "TestAnother" */ "./Other/Threejs/index.vue"),
        
};
