<template>

    <div class="relative bg-white overflow-hidden  bg-gradient-to-r from-violet-200 to-violet-50">
        <div class="max-w-7xl mx-auto">
            <div
                class="relative z-10 rounded-lg pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-gradient-to-r from-purple-400 to-purple-100">
                <svg class="hidden lg:block absolute right-0  inset-y-0 h-full w-48 text-purple-100 transform translate-x-1/2"
                    fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-sky-600 sm:text-5xl md:text-6xl">
                            <br>
                            <span class="block xl:inline">AKILLI ŞEHRİNİZDE </span>
                             <span class="block text-indigo-500 xl:inline">Bugün Ne </span>
                             <br>
                            <span class="block text-indigo-500 xl:inline">Oluyor</span>
                        </h1>
                        <p
                            class="mt-3 text-base text-pink-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Sensörlerimizden seçilen süre boyunca ölçülen datalarımız aşağıdadır.

                        </p>

                    </div>
                </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-100 w-full object-cover"
                src="../assets/detailsittin.png" alt="">
        </div>
        <br>
        <br>

        <div class="w-5/6 mx-auto  mt-10 mb-10" data-theme="valentine" v-if="showTable">
            <!-- {{ sensorDatas.data[0].records }} -->
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <!-- head -->
                    <thead class="text-center">
                        <tr>
                            <th></th>
                            <th>Duman</th>
                            <th>CO<sup>2</sup></th>
                            <th>Metan</th>
                            <th>Toz</th>
                            <th>O<sup>2</sup></th>
                            <th>Kayıt Tarihi</th>

                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <!-- row 1 -->
                        <tr v-for="record in sensorDatas.data[0].records" :key="record.reportID">
                            <td>
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src="../assets/detailpage.png"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div class="font-bold"> {{ record.smoke }} </div>
                                </div>
                            </td>
                            <td>
                                <div class="font-bold"> {{ record.co2 }} </div>
                            </td>
                            <td>
                                <div class="font-bold"> {{ record.metan }} </div>
                            </td>
                            <td>
                                <div class="font-bold"> {{ record.dust }} </div>
                            </td>
                            <td>
                                <div class="font-bold"> {{ record.o2 }} </div>
                            </td>

                            <td>
                                <div class="font-normal">
                                    {{
                                            (new Date(record.timeStamp)).getDate() + '/' + (new
                                                Date(record.timeStamp)).getMonth() + '/' + (new
                                                    Date(record.timeStamp)).getFullYear() + " " +
                                            (new Date(record.timeStamp)).getHours() + ':' + (' 0' + (new
                                                Date(record.timeStamp)).getMinutes()).substr(-2) + ':' + (' 0' + (new
                                                    Date(record.timeStamp)).getSeconds()).substr(-2)
                                    }}
                                </div>
                            </td>


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

export default {
    components: {},
    data() {
        return {
            sensorDatas: {},
            showTable: false
        };
    },
    created() {
        this.getSensorDatas();
    },
    mounted() {

        //   this.$socket.on("added-record", (responseSocket) => {

        //   var path = window.location.pathname.split("/");
        //    if(responseSocket.documentKey._id ==  path[2]) {
        //      console.log(responseSocket);
        //      this.sensorDatas.data[0].records = responseSocket.updateDescription.updatedFields.records ;
        //     //  this.sensorDatas[0].records.push(responseSocket.updateDescription.updatedFields.records);
        //    }
        // })

    },
    methods: {
        async getSensorDatas() {
            var path = window.location.pathname.split("/");
            await this.$appAxios({
                url: "/sensors/" + path[2],
                method: "GET",
            }).then((response) => {
                // console.log(response.data[0].records.length > 0);
                if (response.data[0].records.length > 0) {
                    this.showTable = true
                }
                // console.log(response);
                this.sensorDatas = { ...response };
                // console.log(this.sensorDatas)
            });
        },
    },
};
</script>

<style>
</style>