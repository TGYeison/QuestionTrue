<template>
    <div class="background__content">
        <router-view/>
    </div>
</template>

<style lang="scss" scoped>
    body {
        margin: 0;
    }

    .background {
        &__content {     
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            position: fixed;
            background-size: cover;
            background-image: url(/src/assets/images/background.jpg);

        }
    }
</style>