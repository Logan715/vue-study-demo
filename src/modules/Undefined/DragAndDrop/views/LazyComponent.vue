<template>
    <div><component :is="instance" title="title"></component></div>
</template>
<script>
export default {
    computed: {
        instance() {
            return () =>
                import(
                    /* webpackChunkName: "testing" */ "../../../RequestUtil/index"
                );
        }
    }
};
</script>
