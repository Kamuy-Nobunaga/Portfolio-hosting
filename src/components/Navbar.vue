<template>
    <nav>
        <div class="logo">
            <a href="#">Peter.dev</a>
        </div>
        <div class="other-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </div>
    </nav>
</template>

<script>
export default {
    setup() {

        return {  }
    }
}
</script>

<style lang="scss" scoped>
// lightest #F3EEEA, middle #EBE3D5 #B0A695, darkest #776B5D v
// lightest #F1EFEF, middle #CCC8AA #7D7C7C, darkest #191717
nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    font-size: 2rem;
    background: #B0A695;
    .logo {
        margin: 20px;
        > a {
            text-decoration: none;
            color: #776B5D;
        }
        > a:visited {
            color: #776B5D;
        }
    }
    .other-nav {
        margin: 20px;
        > a {
            text-decoration: none;
            color: #776B5D;
            margin: 0 10px;
            padding: 10px;
            border-radius: 10px;
        }
        > a:visited {
            color: #776B5D;
        }
        > a:hover {
            background: #776B5D;
            color: #F3EEEA;
        }

    }
}

</style>