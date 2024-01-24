<template>
    <section id="contact">
        <h2>Let's get in touch!</h2>
        <div class="contact-inner">
            <div class="inner-left">
                <p>I enjoy working with dedicated people as it makes both of us better and overcomes obstacles effortlessly.</p>
                <p>We can achieve much more than how we can alone. Let's talk.</p>
            </div>
            <div class="inner-right">
                <div class="location"  @click="toggleMapState">
                    <span class="material-symbols-outlined">map</span>
                    <div class="location-inner">
                        <span>Location: </span>
                        <span>Taipei, Taiwan</span>
                        <div class="google-map" id="map" v-if="mapState">
                            <GoogleMap api-key="AIzaSyCavrWsE2kJ9Te7j9sLGJngCl0EqNEMnYU" style="width: 150%; height: 300px" :center="center" :zoom="12">
                                <Marker :options="{ position: center }" />
                            </GoogleMap>
                        </div>
                    </div>
                </div>
                <div class="mail">
                    <div class="mail-inner">
                        <span class="material-symbols-outlined">mail</span>
                        <span>Mail to: </span>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=booanchen@gmail.com" target="_blank">booanchen@gmail.com</a>
                    </div>
                </div>                
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 25.03314781188965, lng: 121.56539154052734 }
        const mapState = ref(false)
        const toggleMapState = () => {
            mapState.value = !mapState.value
        }
        return { center, mapState, toggleMapState }
    }
}
</script>

<style lang="scss" scoped>
// lightest #F3EEEA, middle #EBE3D5 #B0A695, darkest #776B5D v
// lightest #F1EFEF, middle #CCC8AA #7D7C7C, darkest #191717
#contact {
    width: 100%;
    height: 80vh;
    margin: 10px auto;
    text-align: center;
    > h2 {
            font-size: 5rem;
    }
    .contact-inner {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .inner-left {
            width: 40%;
            > p {
                font-size: 1.5rem;
            }
        }
        .inner-right {
            .location {
                > span {
                    font-size: 2rem;
                }
                .location-inner {
                    width: 100%;
                    
                    > span {
                        text-align: center;
                        font-size: 2rem;
                    }
                    .google-map {
                        margin-top: 20px;
                        border-radius: 20px;
                    }
                }
            }
            .location:hover {
                cursor: pointer;
                background: #776B5D;
                color: #F3EEEA;
                border-radius: 20px;
            }
            .mail {
                .mail-inner {
                    > span:first-child {
                        margin-top: 2rem;
                        display: block;
                        font-size: 2rem;
                    }
                    > span:nth-child(2) {
                        font-size: 2rem;
                    }
                    > a {
                        font-size: 2rem;
                        color: #776B5D;
                    }
                }
            }   
        }
    }
}
</style>