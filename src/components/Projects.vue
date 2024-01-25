<template>
    <section id="projects">
        <h2>Projects</h2>
        <div class="container" v-if="1">
            <div class="project" v-for="p in projects" :key="p.id">
                <a :href="p.url">
                    <img :src="p.imgUrl ? p.imgUrl : 'https://fakeimg.pl/350x200/?text=NoImage'" alt="img" width="80%">
                    <h3>{{ p.title }}</h3>
                    <span>{{ p.skills }}</span>
                    <p>{{ p.description }}</p>
                    <a :href="p.githubUrl"><img src="https://skillicons.dev/icons?i=github" alt="skill-icon"></a>
                </a>
            </div>
        </div>
        <div class="no-projects" v-else>New projects coming soon...</div>
    </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import { getDocs, collection } from 'firebase/firestore'
import { colRef } from '../firebase'

export default {
    setup() {
        let projects = ref([])

        onMounted(() => {
            // fetch('http://localhost:3001/projects')
            //     .then(res => res.json())
            //     .then(data => projects.value = data)
            //     .catch(err => console.log(err.message))

            //get collection data
            getDocs(colRef)
                .then((snapshot) => {
                    // let projects = []
                    snapshot.docs.forEach((doc) => {
                        projects.value.push({ ...doc.data(), id: doc.id })
                    })
                    console.log(projects.value);
                })
                .catch(err => {
                    console.log(err.message);
                })
                    })

    return { projects }
    }
}
</script>

<style lang="scss" scoped>
// lightest #F3EEEA, middle #EBE3D5 #B0A695, darkest #776B5D v
// lightest #F1EFEF, middle #CCC8AA #7D7C7C, darkest #191717
#projects {
    width: 100%;
    height: 100%;
    margin: 5rem 1.5rem;
    text-align: center;
    > h2 {
        font-size: 5rem;
    }
    .container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        .project {
            position: relative;
            border-radius: 20px;
            transition: 0.5s;
            box-sizing: border-box;
            > a {
                width: 100%;
                text-decoration: none;
                color: #776B5D;
                > img {
                    aspect-ratio: 4/3;
                    margin-top: 10px;
                    border-radius: 10px;
                }
                > h3 {
                width: 100%;
                font-size: 2.5rem;
                }
                > span {
                    width: 100%;
                    font-size: 2rem;
                    text-decoration: underline;
                    display: none;
                }
                > p {
                    font-size: 1.2rem;
                    padding: 0 20px;
                    display: none;
                }
                > a {
                    display: none;
                } 
            }
        }
        .project:hover {
            background-color: #776B5D;
            width: 100%;
            > a {
                color: #F3EEEA;
                > span, > p, > a {
                display: block;
                transition: 2s;
                }
            }
        }
    }
}

@media (max-width: 960px) {
    #projects {
    margin: 3rem auto;
    > h2 {
        font-size: 3rem;
    }
    .container {
        grid-template-columns: 1fr;
        .project {
            width: 90%;
            margin: 0 auto;
            > a {
                > h3 {
                font-size: 2rem;
                }
                > span {
                    font-size: 1.5rem;
                    display: block;
                }
                > p {
                    display: block;
                }
                > a {
                    display: block;
                } 
            }
        }
    }
}
}
</style>