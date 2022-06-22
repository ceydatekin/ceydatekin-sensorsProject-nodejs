
<template>
    <div class=" bg-gradient-to-r from-emerald-50 to-emerald-50 " data-theme="wireframe">
        <!-- HERO SECTION -->
 
                <div class="carousel carousel-center h-100 max-w space-x-6  rounded-box bg-gradient-to-r from-orange-300 to-orange-50">
                    <div class="carousel-item w-80 h-400 " >
                        <img class=" rounded-box" src="../assets/laptop.png" alt="Album">
                      
                    </div>
                    <div class="carousel-item w-80 h-400 " >
                        <img class=" rounded-box" src="../assets/pixlr-bg-result (2).png" alt="Album">
                      
                    </div>
                   <div class="carousel-item w-80 h-400 " >
                        <img class=" rounded-box" src="../assets/pixlr-bg-result (3).png" alt="Album">
                      
                    </div>
                    <div class="carousel-item w-80 h-400 " >
                        <img class=" rounded-box" src="../assets/deneme.png" alt="Album">
                      
                    </div>
                   
                </div>
          


        <!-- INPUT SECTION -->
        <div class="mt-40 w-2/3 mx-auto text-center ">
            <div class="mockup-window border border-brand-orange/50 bg-gradient-to-r from-emerald-300 to-emerald-100">
                <div class="flex-row justify-center px-4 py-5 border-t border-brand-orange/50 ">
                    
                    <h1 class="text-3xl text-orange-600 font-semibold block">Sensor Ekleyiniz</h1>
                    <br>
                    <!-- FORM INPUT -->
                    <div class="flex justify-center items-center gap-x-5">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-orange-600 text-xl  text-base">Sensör Tipi:</span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-brand-orange/30 text-lg">Cinsi</span>
                                    <select class="select select-bordered  text-sm font-base"
                                        v-model="addSensorForm.type">
                                        <option disabled selected class="text-gray-400">Seciniz </option>
                                        <option class="text-black">Metan</option>
                                        <option class="text-black">Bütan</option>
                                         <option class="text-black">Nem</option>
                                        <option class="text-black">Sıcaklık</option>
                                        <option class="text-black">Azot</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="form-control ml-10">
                            <label class="label">
                                <span class="label-text text-orange-600 text-xl text-base">X Konumu:</span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-brand-orange/30 text-lg">X</span>
                                    <input type="number" placeholder=""
                                        class="input input-bordered border-brand-orange/30 input-md w-full"
                                        v-model="addSensorForm.locationX" />
                                </label>
                            </div>
                        </div>
                        <div class="form-control ml-10">
                            <label class="label">
                                <span class="label-text text-orange-600 text-xl text-base">Y Konumu:</span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-brand-orange/30 text-lg">Y</span>
                                    <input type="number" placeholder=""
                                        class="input input-bordered border-brand-orange/30 input-md w-full"
                                        v-model="addSensorForm.locationY" />
                                </label>
                            </div>
                        </div>
                        <div class="form-control ml-10">
                            <label class="label">
                                <span class="label-text text-orange-600 text-xl text-base">Ölçüm Yapma Sıklığı</span>
                            </label>
                            <div class="form-control">
                                <label class="input-group input-group-md">
                                    <span class="bg-brand-orange/30 text-lg">Sn</span>
                                    <input type="number" placeholder=""
                                        class="input input-bordered border-brand-orange/30 input-md w-full"
                                        v-model="addSensorForm.reportInterval" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <br>

                    <div class="flex justify-center mt-8">
                        <button class="btn btn-outline btn-orange text-orange-600 hover:bg-orange-400"
                            @click="createSensor()">Sensör Ekleyiniz</button>
                    </div>

                </div>
            </div>
        </div>
          <br>
          <br>
        <!-- LIST MAIN POINTS -->
        <div class="w-5/6 mx-auto  mt-10 mb-10" data-theme="wireframe" v-if="sensorsInfo.data">
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>Tipi / Merkez Noktası</th>
                            <th>Lokasyonu / Drumu</th>
                            <th>Oluşturulma Tarihi</th>
                            <th>Ölçüm Sıklığı</th>
                            <th>Sensör Ölçümleri</th>
                            <th>Düzenle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="sensor in sensorsInfo.data" :key="sensor._id">
                            <td>
                                <div class="flex items-center space-x-3">

                                    <div>
                                        <div class="font-bold">{{ sensor.type }}</div>
                                        <div class="text-sm opacity-50">{{ sensor.origin_id.title }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-sm">
                                X: {{ sensor.locationX }}, Y: {{ sensor.locationY }}
                                <br>
                                <!-- <span class="badge badge-ghost badge-sm">Latitude - Longitude</span> -->
                                <span class="badge badge-success badge-sm">• Active</span>
                            </td>
                            <td class="text-sm">{{ sensor.createdAt }}</td>
                            <th>
                            <td class="text-sm">{{ sensor.reportInterval / 1000 }}</td>
                            </th>
                            <th>
                                <router-link :to="`/sensor/${sensor._id}`">
                                    <button class="btn bg-gradient-to-r from-emerald-600 to-emerald-600 btn-xs">Detayları</button>
                                </router-link>

                            </th>

                            <th>
                                <button class="btn  bg-gradient-to-r from-orange-500 to-orange-500  btn-xs text-white hover:bg-white hover:text-error"
                                    @click="deleteSensor(sensor._id)">Sensörü Sil</button>
                            </th>
                        </tr>
                    </tbody>
                    <!-- foot -->
 
                </table>
            </div>
        </div>

<br>
        <router-view></router-view>

    </div>
</template>

<script>

export default {

    data() {
        return {
            sensorsInfo: {}, // main pointe ait tüm sensörleri burada depola
            mainPointInfo: {},
            addSensorForm: { // bu main pointe yeni sensör eklemek için
                type: "Seciniz",
                locationX: null,
                locationY: null,
                reportInterval: null,
            }
        }
    },
    created() {
        
        this.getMainPointInformation();
        this.getSensorFromMainPoint();
    },
    methods: {
        async getMainPointInformation() {
           
            var path = window.location.pathname.split("/");
            await this.$appAxios({
                url: "/mainpoints/" + path[2],
                method: "GET"
            }).then(response => {
                 
                this.mainPointInfo = { ...response }
            })
        },
        async getSensorFromMainPoint() {
           console.log("burası")
            var path = window.location.pathname.split("/");
            await this.$appAxios({
                url: "/sensors/all/" + path[2],
                method: "GET"
            }).then(response => 
            {
                console.log(response);
                this.sensorsInfo = { ...response }
            }).catch(error => {

            })

        },
        async deleteSensor(id) {
            await this.$appAxios({
                url: `/sensors/${id}`,
                method: "DELETE"
            }).then(deletedItem => {
               
                this.sensorsInfo.data = this.sensorsInfo.data.filter(item => item._id !== id);
                if (this.sensorsInfo.data.length == 0) {
                    this.$router.go(); 
                }
               
               
            });
        },
        async createSensor() {
            if (this.addSensorForm.locationX == null || this.addSensorForm.locationY == null || this.addSensorForm.reportInterval == null) {
                
            }
            if (this.addSensorForm.type == "Seciniz") {
               
            }
            console.log(this.mainPointInfo.data)
            const mainPointRadius = this.mainPointInfo.data[0].radius;
            const mainPointLocationX = this.mainPointInfo.data[0].locationX;
            const mainPointLocationY = this.mainPointInfo.data[0].locationY;
            const locationX = this.addSensorForm.locationX;
            const locationY = this.addSensorForm.locationY;
            const distance = Math.sqrt(Math.pow((mainPointLocationX - locationX), 2) + Math.pow((mainPointLocationY - locationY), 2));
            console.log(distance)
            if (distance > mainPointRadius) {
               console.log("deniyoz")
            }
            var path = window.location.pathname.split("/");
            await this.$appAxios({
                url: "/sensors",
                method: "POST",
                data: {
                    type: this.addSensorForm.type,
                    locationX: this.addSensorForm.locationX,
                    locationY: this.addSensorForm.locationY,
                    reportInterval: this.addSensorForm.reportInterval * 1000,
                    origin_id: path[2]
                }
            }).then(sensors => {
                this.getSensorFromMainPoint();
                
            });
        },

    }

}
</script>

<style>
</style>
