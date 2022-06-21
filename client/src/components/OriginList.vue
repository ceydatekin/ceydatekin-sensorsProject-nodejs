<template>

    <div class="relative bg-white overflow-hidden  bg-gradient-to-r from-emerald-50 to-emerald-50 ">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-gradient-to-r from-orange-200 to-emerald-0" >
                <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-emerald-700 sm:text-5xl md:text-6xl">
                            <br>        
                            <span class="block xl:inline">AKILLI ŞEHRİNİZE </span>
                            <span class="block text-orange-600 xl:inline">HOŞGELDİNİZ</span>
                        </h1>
                        <p
                            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Şehrimizde belirlenene ana noktalarınızın alt sönserleri mevcuttur. Bulunan alt sönserlerden düzenli bilgi akışı ile 
                            şehrimiz güvende.

                            </p>

                    </div>
                </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="../assets/pixlr-bg-result.png"
                alt="">
        </div>
        <br>
         <br>
        <div class="w-5/6 mx-auto  mt-10 mb-10" data-theme="emerald" v-if="origin.data">
            <div class="overflow-x-auto w-full ">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Title </th>
                            <th>Location / Status</th>
                            <th>Description</th>
                            <th>Sensör Listesi</th>
                            <th>Düzenle</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="point in origin.data" :key="point._id">
                            <td>
                                <div class="flex items-center space-x-3">

                                    <div>
                                        <div class="font-bold">{{ point.title }}</div>

                                    </div>
                                </div>
                            </td>
                            <td class="text-sm">
                                <span> X: {{ point.locationX }}, Y: {{ point.locationY }}</span>
                                <br>
                                
                                <span >Radius: {{ point.radius }}</span>
                            </td>
                            <td class="text-sm">{{ point.description }}</td>
                            <th>
                                <router-link :to="`/origin/${point._id}`">
                                    <button class="btn bg-gradient-to-r from-emerald-600 to-emerald-600 btn-xs">Details</button>
                                </router-link>
                            </th>

                            <th>
                                <button class="btn  bg-gradient-to-r from-orange-500 to-orange-500  btn-xs text-white hover:bg-white hover:text-error"
                                    @click="deleteMainPoint(point._id)">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                    <!-- foot -->

                </table>
            </div>
        </div>

    </div>
    <router-view></router-view>




</template>

<script>
import { useRouter } from 'vue-router'
export default {

    data() {
        return {
            origin: {}, // Veriler çekildikten sonra buraya yazılacak
            crateOriginForm: { // İstek yollamak için verileri depola
                title: null,
                description: null,
                locationX: null,
                locationY: null,
                radius: null
            }
        };
    },
    mounted() {
        this.getMainPoints();
    },
    methods: {
        async getMainPoints() {
            await this.$appAxios({
                url: "/mainpoints/allorigin",
                method: "GET"
            }).then(mainPoints => {
                this.origin = { ...mainPoints };
            });
        },

        async deleteMainPoint(id) {
            await this.$appAxios({
                url: `/mainpoints/${id}`, // /mainpoint/31321sa
                method: "DELETE"
            }).then(deletedItem => {
                // TODO : daha iyi bir çözüm bul !
                // this.getMainPoints();
                this.origin.data = this.origin.data.filter(item => item._id !== id);
                if (this.origin.data.length == 0) {
                    this.$router.go(); // refresh page and show code-mock-up
                }
                const toast = useToast();
                toast.success("Main point has been deleted!");
                return { toast }
            });
        }
    },

}
</script>

<style>
</style>