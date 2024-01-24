<template>
    <h1>Well done with the new project!!!</h1>
    <p>Let's add it into storage and display it on portfolio</p>
    <form class="add" @submit.prevent="addProject">
        <label for="title">Title:</label>
        <input type="text" name="title" v-model="projectForm.title" required>
        <label for="skills">Skills:</label>
        <input type="text" name="skills" v-model="projectForm.skills" col="2" required>
        <label for="description">Description:</label>
        <textarea type="text" name="description" v-model="projectForm.description" rows="10" required>
        </textarea>
        <label for="url">Url:</label>
        <input type="text" name="url" v-model="projectForm.url" required>
        <label for="imgUrl">Url for image:</label>
        <input type="text" name="imgUrl" v-model="projectForm.imgUrl" required>
        <label for="githubUrl">Url for github:</label>
        <input type="text" name="githubUrl" v-model="projectForm.githubUrl" required>

        <button>Add a new project</button>
    </form>
</template>

<script>
import { addDoc } from 'firebase/firestore';
import { colRef } from '@/firebase';
import { reactive } from 'vue';
export default {
    setup() {
        const projectForm = reactive({
            title: "",
            skills: "",
            description: "",
            url: "",
            imgUrl: "",
            githubUrl: ""

        })

        const addProject = (() => {
            addDoc(colRef, {
                title: projectForm.title,
                skills: projectForm.skills,
                description: projectForm.description,
                url: projectForm.url,
                imgUrl: projectForm.imgUrl,
                githubUrl: projectForm.githubUrl
            })
            .then(() => {
                projectForm.title = ""
                projectForm.skills = ""
                projectForm.description = ""
                projectForm.url = ""
                projectForm.imgUrl = ""
                projectForm.githubUrl = ""
            })
        })
        

        return { projectForm, addProject }
    }
}
</script>

<style lang="scss" scoped>
// lightest #F3EEEA, middle #EBE3D5 #B0A695, darkest #776B5D v
// lightest #F1EFEF, middle #CCC8AA #7D7C7C, darkest #191717
h1 {
    margin: 10px auto;
    text-align: center;
    font-size: 5rem;
}
p {
    margin: 10px auto;    
    text-align: center;
    font-size: 2rem;
}
form {
    margin: 1rem auto;
    text-align: center;
    > label {
        font-size: 1.5rem;
    }
    > input, > textarea {
        margin: 0 auto;
        display: block;
        width: 20rem;
        color: #776B5D;
        background: #F3EEEA;
        border: none;
        border-radius: 20px;
        font-size: 1.5rem;
        padding: 10px;
    }
    > button {
        margin: 20px auto;
        width: 15rem;
        height: 5rem;
        color: #776B5D;
        background: #F3EEEA;
        border: none;
        border-radius: 20px;
        box-shadow: 2px 2px 2px 2px #776B5D;
        font-size: 1.5rem;
        font-family: 'Patrick Hand', cursive;
    }
    > button:active {
        position: relative;
        top: 2px;
        left: 2px;
    }
}
</style>