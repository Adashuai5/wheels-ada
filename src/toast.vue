<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "WheelsToast"
};
</script>
<style scoped lang="scss">
$font-size:14px;
$toast-bg:rgba(0,0,0,0.75);
$toast-height: 40px;
    .toast {
        font-size: $font-size;
        height: $toast-height;
        line-height: 1.8rem;
        background: $toast-bg;
        color: #fff;
        position: fixed;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        padding: 0 16px;
        display: flex;
        align-items: center;
    }
</style>