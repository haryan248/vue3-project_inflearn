<template>
    <div class="toast-box">
        <transition-group name="slide">
            <div v-for="toast in toasts" :key="toast.id" class="alert" :class="`alert-${toast.type}`" role="alert">
                {{ toast.message }}
            </div>
        </transition-group>
    </div>
</template>

<script>
import { useToast } from "@/composables/toast";
export default {
    setup() {
        const { toasts } = useToast();
        return {
            toasts,
        };
    },
};
</script>
