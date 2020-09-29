<template>
    <div class="pill">
        <span class="name">{{name}}</span>
        <span class="amout">{{amout}}</span>
    </div>
</template>

<script>
export default {
    props: ['name', 'amout']
}
</script>

<style scoped>
    .pill{
        margin: 10px;
        height: 55px;
        border-radius: 30px;

        background-color: rgb(233, 192, 200);
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;

        display: flex;
        align-items: center;
    }

    .pill .name{
        margin-left: 15px;
    }

    .pill  .amout{
        margin: 10px;
        padding: 5px;
        height: 35px;
        widows: 35px;
        border-radius: 18px;

        background-color: white;
        color:  rgb(233, 192, 200);
        font-size: 14px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>