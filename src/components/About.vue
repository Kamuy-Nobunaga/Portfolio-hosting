<template>
    <section id="about">
        <h2>About me</h2>
        <h3>
            <span>HR 
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span> Front-end Developer
            </span>
            <span>based in Taipei, Taiwan</span>
        </h3>
        <p>Hiya, it's Peter here. I was an HR, specifically in the recruitment field. After few months of learning, I have had some projects to demonstrate in the next section. I am currently looking for an opportunity to put what I have learned into practice in an awesome team as a front-end vue developer. Feel free to reach out if you see my potential through the projects!</p>
    </section>
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
@keyframes scroll-reveal {
    to { background-size: 100% 100%; }
}
#about {
    width: 100%;
    height: 80vh;
    text-align: center;
    > h2 {
        margin: 0;
        font-size: 5rem;
    }
    > h3 {
        margin: 0;
        font-size: 3rem;
        > span {
            display: block;    
            color: hsl( 0%, 0%, 100%, 0.2);
            background-clip: text;
            background-repeat: no-repeat;
            background-size: 0% 100%;
            background-image: linear-gradient(45deg, #776B5D, #B0A695);
            animation: scroll-reveal linear forwards;
            animation-timeline: view();
            animation-range-start: cover 0vh;
            animation-range-end: cover 60vh;
            > span {
                font-size: 2rem;
            }
        }
        > span:last-child {
            font-size: 2rem;
        }
    }
    > p {
        margin: 0 auto;
        width: 60%;
        font-size: 2rem;
    }
}

@media (max-width: 960px) {
    #about {
    height: 60vh;
        > h2 {
            margin: 0;
            font-size: 3rem;
        }
        > h3 {
            margin: 0;
            font-size: 2rem;
            > span {
                animation-range-start: cover 30vh;
                animation-range-end: cover 60vh;

                > span {
                    font-size: 1.5rem;
                }
            }
            > span:last-child {
                font-size: 1.5rem;
            }
        }
        > p {
            margin: 0 auto;
            width: 80%;
            font-size: 1.2rem;
        }
    }
}
</style>