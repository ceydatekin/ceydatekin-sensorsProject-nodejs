<template>
    <div data-theme="garden" class="flex-col flex my-auto justify-between items-center h-screen ">
        <br>
        <div
            class="mockup-window border border-base-300 h-100 gradient-form bg-gradient-to-r from-green-800 via-green-400 to-green-100">

            <div class="flex justify-center px-20 py-16 border-t border-base-500 ">
                <div class="card lg:card-side  border-base-200 bg-neutral-300 shadow-xl">

                    <figure >
                        <img class="w-96"  src="../assets/homapage.png" alt="Album">
                    </figure>

                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r  from-green-900 to-green-600">
                                    Ana Noktanızın İsmini Yazınız
                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-green-800 to-green-100 text-lg">İSİM</span>
                                    <input type="text" placeholder="Type here"
                                        class="input input-bordered border-brand-orange/30 input-md w-full">
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r  from-green-900 to-green-600">
                                    Lokasyon-X

                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-yellow-700 via-yellow-150 to-yellow-100 text-lg">X</span>
                                    <input type="text" placeholder="Type here"
                                        class="input input-bordered input-md w-full">
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r  from-green-900 to-green-600">
                                    Lokasyon-Y

                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-yellow-700 via-yellow-150 to-yellow-100 text-lg">Y</span>
                                    <input type="text" placeholder="Type here"
                                        class="input input-bordered border-brand-orange/30 input-md w-full">
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span
                                    class="bg-clip-text  text-lg text-transparent bg-gradient-to-r  from-green-900 to-green-600">
                                    Yarıçapı

                                </span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-gradient-to-r from-yellow-700 via-yellow-150 to-yellow-100 text-lg">r</span>
                                    <input type="text" placeholder="Type here"
                                        class="input input-bordered border-brand-orange/30 input-md w-full">
                                </label>
                            </div>
                        </div>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">OLUŞTUR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
export default {
    data() {
        return {
            addMainPointData: {
                locX: null,
                locY: null,
                radius: null,
                count: null
            }
        }
    },
    methods: {
        createMainPoint() {
            this.$appAxios({
                url: "/sensors",
                method: "POST",
                data: {
                    merkezX: this.addMainPointData.locX,
                    merkezY: this.addMainPointData.locY,
                    yaricapsayisi: this.addMainPointData.radius,
                    sensorsayisi: this.addMainPointData.count
                }
            }).then(response => {
                console.log(response)
            })
        }
    }
}
</script>

<style>
</style>