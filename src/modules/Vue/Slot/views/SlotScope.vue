<template>
    <div>
        <div>show name</div>
        <div>
            <slot :user="user">{{ user.lastName }}</slot>
            <slot name="footer" :lastName="user.lastName">
                {{ user.firstName }}
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                lastName: "陈",
                firstName: "名字"
            }
        };
    }
};
</script>
