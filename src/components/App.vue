<template>
    <div :class="nameClass">
        {{ name }}
        {{ num }}
    </div>
    <input type="text" v-bind:value="name" @input="updateInput" />
    <button class="btn btn-primary" @click="onSubmint">CLick</button>
    <!-- v-on == @ -->
</template>
<script>
import { ref } from "vue";
import { reactive } from "vue";
export default {
    setup() {
        const name = ref("Kossie Coder1");
        const num = reactive({
            id: 1,
        });

        const nameClass = ref("");

        const updateName = () => {
            name.value = "Kossie Coder";
            // ref 사용시 .value를 써야함
            num.id = 2;
            // reactive 사용시 바로 변경 가능
            nameClass.value = "name";
        };

        const onSubmint = () => {
            console.log(name.value);
        };

        const updateInput = (e) => {
            console.log(e.target.value);
        };
        return {
            name,
            num,
            updateName,
            nameClass,
            onSubmint,
            updateInput,
        };
    },
};
</script>
