export default {
    vModal: () => import(/* webpackChunkName: "vModal" */ "./Vue/VModel"),
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
        import(/* webpackChunkName: "dragAndDrop" */ "./Undefined/DragAndDrop")
};
