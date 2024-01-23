<template>
    <div class="footer">
        <div class="copyright">
            <p>Copyright &#169 {{ year }}. All rights are reserved</p>
        </div>
        <div class="links">
            <ul>
                <li><a href="https://github.com/Irvine-Kamuy"><img src="https://skillicons.dev/icons?i=github" alt="skill-icon"></a></li>
                <li><a href="https://www.linkedin.com/in/po-an-chen/"><img src="https://skillicons.dev/icons?i=linkedin" alt="skill-icon"></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const d = new Date()
        const year = ref( d.getFullYear())
        return { year }
    }
}
</script>

<style lang="scss" scoped>
// lightest #F3EEEA, middle #EBE3D5 #B0A695, darkest #776B5D v
// lightest #F1EFEF, middle #CCC8AA #7D7C7C, darkest #191717
.footer {
    background: #776B5D;
    color: #F3EEEA;
    display: flex;
    justify-content: space-around;
    .copyright {
        font-size: 1.5rem;
    }
    .links {
        > ul {
            display: flex;
            > li {
                list-style: none;
                padding: 0 10px;
            }
        }
    }
}

</style>