<template>
    <fragment>
        <a href="#" class="have-code">Have a Code?</a>
        <div class="have-code-container">
            <form action="#">
                <input type="text">
                <button type="submit" class="button button-plain">Apply</button>
            </form>
        </div>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
export default {
    name: 'CouponCode',
    components: {
        Fragment
    }
}
</script>

<style scoped>
    a, a:visited{
        color:#212121;
        text-decoration:none;
    }

    .have-code {
      display: block;
      margin: 14px 0;
    }

    .have-code-container {
      border: 1px solid #919191;
      padding: 16px;
      width: 60%;
    }

    form {
        display: flex;
    }

    input[type="text"] {
        width: 70%;
        padding: 10px;
        font-size: 16px;
    }

    button[type="submit"] {
        background: white;
        border: 1px solid #919191;
        padding-top: 8px;
        padding-bottom: 8px;
        width:90px;
    }
    button[type="submit"] :hover {
          background: #212121;
    }
</style>