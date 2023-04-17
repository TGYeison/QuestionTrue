<script lang="ts">

</script>

<template>
    <main class="main__content">
        <div class="container__float">
            <div class="title__content">
                <h1 class="title__text">Quesion True!</h1>
            </div>
            <div class="btns__content">
                <ul class="btns__list">
                    <li class="btns__item">
                        <router-link to='/quesion' class="btns__button">
                            Jugar
                        </router-link>
                    </li>
                    <li class="btns__item">
                        <div class="separator__content">
                            <span class="separetor__text">
                                or
                            </span> 
                        </div>
                    </li>
                    <li class="btns__item">
                        <router-link to='/login' class="btns__button">
                            Login
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
    .main__content {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container__float {
        width: 100%;
        height: auto;
        padding: 10px 20px;
        max-width: 420px;
        min-height: 500px;
        border-radius: 10px;
        box-sizing: border-box;
        background-color: rgba($color: #fff, $alpha: .9);
    }

    .title__content {
        width: 100%;
        font-size: 2em;
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .btns {
        &__content {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        &__list {
            width: 100%;
            display: flex;
            flex-flow: wrap;
            list-style: none;
            padding: 0;
        }

        &__item {
            margin: auto;
            width: 80%;
            min-width: 180px;
        }

        &__button {
            width: 100%;
            display: block;
            text-decoration: none;
            padding: 12px 0;
            border: none;
            text-align: center;
            background: #32e8e8;
            border-radius: 2px;
            font-size: 1em;
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    }

    .separator{
        &__content {
            padding: 1rem 0;
            width: 100%;
            position: relative;

            &::before {
                content: "";
                width: 40%;
                left: 0;
                bottom: 1rem;
                position: absolute;
                border-bottom: 1px solid #a9a9a9;
            }

            &::after {
                content: "";
                width: 40%;
                right: 0;
                bottom: 1rem;
                position: absolute;
                border-bottom: 1px solid #a9a9a9;
            }

        }

        &__text {
            width: 120px;
            left: calc(50% - 60px);
            text-align: center;
            position: absolute;
            bottom: 0.5rem;
        }
    }
</style>