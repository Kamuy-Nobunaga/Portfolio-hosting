<template>
    <section class="home">
        <div class="container">
            <div class="content">
                <div class="hero-main">
                    <div class="hero-txt">
                        <h1>Front-End Vue Developer</h1>
                        <p>Hi, I'm <span data-shadow="Peter Chen">Peter Chen</span>. A passionate Front-end Vue Developer based in Taiwan.</p>
                        <span>
                            <a href="https://www.linkedin.com/in/po-an-chen/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a>
                            <a href="https://github.com/Irvine-Kamuy"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                        </span>

                    </div>
                    <div class="hero-img"></div>
                </div>
                <div class="skills">
                    <p>Tech Stack</p>
                    <div class="logos">
                        <ul>
                            <li><img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"></li>
                            <li><img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon"></li>
                            <li><img src="https://skillicons.dev/icons?i=vue,sass" alt="skill-icon"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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
@keyframes morph {
    0% {border-radius: 23% 77% 70% 30% / 30% 67% 33% 70% }
    25% {border-radius: 61% 39% 85% 15% / 14% 69% 31% 86% ;}
    50% {border-radius: 84% 16% 57% 43% / 37% 42% 58% 63% ;}
    75% {border-radius: 47% 53% 25% 75% / 26% 84% 16% 74% ;}
    100% {border-radius: 23% 77% 70% 30% / 30% 67% 33% 70%  ;}
  }
@keyframes move {
    0% { background-position: 0 0;}
    100% { background-position: 100% -100%;}
}

.home {
    width: 100%;
    height: 90vh;
    .container {
        margin: 8rem auto 0 auto;
        max-width: 100rem;
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4rem;
            .hero-main {
                display: flex;
                align-items: center;
                gap: 1rem;
                .hero-txt {
                    max-width: 30rem;
                    > h1 {
                        font-size: 4rem;
                        line-height: 1;
                    }
                    > p {
                        color: #B0A695;
                        font-size: 1.5rem;
                        > span {
                            position: relative;
                            color: #B0A695;
                            font-weight: bolder;
                        }
                        > span::after {
                            content: attr(data-shadow);
                            position: absolute;
                            top: 3px;
                            left: -3px;
                            z-index: -1;
                            background-image: linear-gradient( 
                                45deg, 
                                transparent 45%, 
                                #B0A695 45%,
                                #000000 55%,
                                transparent 0
                            );
                            background-size: 0.1em 0.1em;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: move 20s linear infinite;
                        }
                    }
                    > span {
                        > a {
                            color: #B0A695;
                            font-size: 2rem;
                        }
                    }
                }
                .hero-img {
                    animation: morph 6s linear infinite;
                    background-image: url(/src/assets/portfolio.JPG);
                    background-position: 60% 10%;
                    background-repeat: no-repeat;
                    background-size: 120%;
                    border-radius: 23% 77% 70% 30% / 30% 67% 33% 70% ;
                    border: 3px solid #776B5D;
                    width: 25rem;
                    aspect-ratio: 1;
                    
                }
            }
            .skills {
                width: 70%;
                display: flex;
                flex-direction: row;
                align-items: start;
                > p {
                    font-size: 2rem;
                }
                > p::after {
                    content: "|";
                    margin: 0 3rem;
                }
                .logos {
                    ul {
                        display: flex;
                        flex-direction: row;
                        list-style: none;
                        > li {
                            padding: 0 10px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 960px) {
    .home {
    width: 100%;
    height: 50vh;
        .container {
            .content {
                margin: 0 20px;
                gap: 1rem;
                .hero-main {
                    gap: 1rem;
                    text-align: center;
                    
                    .hero-txt {
                        max-width: 30rem;
                        > h1 {
                            font-size: 1.5rem;
                            line-height: 1;
                        }
                        > p {
                            font-size: 1rem;
                            > span::after {
                                top: 1px;
                                left: -1px;
                            }
                        }
                        > span {
                            > a {
                                font-size: 1rem;
                            }
                        }
                    }
                    .hero-img {
                        background-size: 100%;
                        width: 15rem;   
                    }
                }
                .skills {
                    width: 90%;
                    > p {
                        font-size: 1rem;

                    }
                    > p::after {
                        content: "";
                    }
                    .logos {
                        ul {
                            > li {
                                padding: 0 5px;
                                > img {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
    }
}
}
</style>