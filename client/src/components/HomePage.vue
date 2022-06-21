<template>
    <div data-theme="emerald"
        class="flex-col flex my-auto justify-between items-center h-screen bg-gradient-to-r from-emerald-50 to-emerald-50 ">
        <br>
        <div
            class="mockup-window border border-base-300 h-100 gradient-form bg-gradient-to-r from-emerald-600 via-emerald-200 to-emerald-100">

            <div class="flex justify-center px-20 py-1 border-t border-base-500 ">
                <div class="card lg:card-side px-20 gradient-form bg-gradient-to-r from-emerald-200 to-emerald-50 text-lg border-base-200 bg-neutral-300 shadow-xl">

                    <figure>
                        <img class="w-96" src="../assets/homapage.png" alt="Album">
                    </figure>

                    <div class="card-body ">
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r from-orange-700 to-orange-600">
                                    Konumunuza İsim Belirleyiniz :
                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-orange-300 to-orange-100 text-lg">İsim</span>
                                    <input type="text" placeholder="Buraya Yazınız"
                                        class="input input-bordered border-brand-orange/30 input-md w-full"
                                        v-model="crateOriginForm.title" />
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r  from-orange-700 to-orange-600">
                                    Lokasyon-X :

                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-orange-300 to-orange-100 text-lg">X</span>
                                    <input type="number" placeholder="Buraya Yazınız"
                                        class="input input-bordered input-md w-full"
                                        v-model="crateOriginForm.locationX">
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r  from-orange-700 to-orange-600">
                                    Lokasyon-Y :

                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-orange-300 to-orange-100 text-lg ">Y</span>
                                    <input type="number" placeholder="Buraya Yazınız"
                                        class="input input-bordered border-brand-orange/30 input-md w-full"
                                        v-model="crateOriginForm.locationY">
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r   from-orange-700 to-orange-600">
                                    Yarıçapı :

                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-orange-300 to-orange-100 text-lg">r</span>
                                    <input type="number" placeholder="Buraya Yazınız"
                                        class="input input-bordered border-brand-orange/30 input-md w-full"
                                        v-model="crateOriginForm.radius">
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r   from-orange-700 to-orange-600">
                                    Açıklama :

                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-orange-300 to-orange-100 text-lg">Tanım</span>
                                    <input type="text" placeholder="Buraya Yazınız"
                                        class="input input-bordered border-brand-orange/30 input-md w-full"
                                        v-model="crateOriginForm.description" />
                                </label>
                            </div>
                        </div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary bg-gradient-to-r from-orange-300 to-orange-100  w-full"
                                @click="createMainPoint">OLUŞTUR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br>
    </div>

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

    methods: {
        async createMainPoint() {
            if (this.crateOriginForm.title == null || this.crateOriginForm.description == null || this.crateOriginForm.locationX == null || this.crateOriginForm.locationY == null || this.crateOriginForm.radius == null) {

            }
            await this.$appAxios({
                url: "/mainpoints",
                method: "POST",
                data: {
                    title: this.crateOriginForm.title,
                    description: this.crateOriginForm.description,
                    locationX: this.crateOriginForm.locationX,
                    locationY: this.crateOriginForm.locationY,
                    radius: this.crateOriginForm.radius,
                }
            }).then(mainPoints => {
                console.log(mainPoints);
                this.$router.push('/mainpoints/allorigin') 
            });
        }
    },

}
</script>

<style>
</style>