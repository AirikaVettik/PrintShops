<template>
    <div class="row">
    <h2><br>EESTI TRÜKIKOJAD</h2>
    <div v-for="(shop, index) in shops" :key="index" class="col-4 my-1">
        <b-card no-body style="max-width: 40rem;">
        
                    <b-card-body>
                    <b-card-title><h1>{{ shop.name }}</h1></b-card-title>
                    <b-card-sub-title class="mb-2">{{ shop.contact.companyname }}</b-card-sub-title>
                    </b-card-body>

                    <b-list-group flush>
                    <b-list-group-item>
                    <br>
                    <h5>Aadress: </h5> <br>
                        {{ shop.location.address }}, {{ shop.location.city}} <br>
                        {{ shop.location.country }}, {{ shop.location.postcode }} <br>
                        <br>
                    </b-list-group-item>
                    
                    <b-list-group-item>
                    <br>
                    <h4>Kontakt: </h4> <br>
                        e-mail: {{ shop.contact.email }} <br>
                        telefon: {{ shop.contact.phone }} <br>
                        koduleht: {{ shop.contact.homepage}} <br>
                       <br>
                    </b-list-group-item>

                    <b-list-group-item>
                    <br>
                            <h4>Tooted/teenused: </h4> <br>
                            <div v-for="items in shop.products">
                                <li>{{ items.size}} {{ items.paper}} {{ items.price}}€ ({{ items.name}})<br>
                                </li>
                            </div>
                            <br>
                            </b-list-group-item>

                            </b-list-group>
                            <b-card-body>

                            <b-button variant="outline-info" class="mb-2">
                            <b-icon icon="wrench" font-scale="2" aria-hidden="true">
                            <router-link v-bind:to="'editshop/'"></router-link>
                            </b-icon>
                            </b-button>
                            <b-button variant="outline-info" class="mb-2">
                            <b-icon icon="trash-fill" font-scale="2" aria-hidden="true"
                            @click="deleteProduct(shop._id, index)"></b-icon>
                            </b-button>
                            </b-card-body>
                    
            <b-card-footer>
            Lisatud: {{ moment(shop.createdDate).format("DD.MM.YYYY") }} 
            </b-card-footer>
            
        </b-card>
        <br>
</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Shops',
    data() {
        return {
            shops: []
        }
    },

    async created () {
        await this.getMyShops()
    },
    
    methods: {

        async getMyShops() {
            const shops = await axios({
            url: 'api/shops',
            method: 'GET'
            })
            console.log("shops", shops.data)
            this.shops = shops.data    
            
        },

        async deleteProduct(_id, index) {
            if (confirm ("Kas oled kindel, et soovid toodet kustutada?")) {
                console.log(_id)
                await axios ({
                url:  `api/shop/${_id}` ,
                method: 'DELETE'
                })
                await this.getMyShops()
                }
            },
    }}
    
</script>

<style>
h2 {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center
  },
.mb-0 {
    margin-top: 20px 0 0,
    },
h4 {
    margin: 0;
    padding: 0;
    font-size: 16px 
    }
</style>