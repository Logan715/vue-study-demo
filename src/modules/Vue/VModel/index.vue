<template>
    <div>
        <label>普通的v-model: </label>
        <input v-model="message" />
        <p>Message is: {{ message }}</p>
        <customise-v-model v-model="count" />
    </div>
</template>

<script>
import CustomiseVModel from "./views/CustomiseVModel";
export default {
    components: {
        "customise-v-model": CustomiseVModel
    },
    data() {
        return {
            message: "",
            count: 0
        };
    },
    watch: {
        count() {
            console.log("v-model-count change:", this.count);
        }
    }
};
</script>
