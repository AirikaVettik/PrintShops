<template>
   <div id="form" align="center" >
        <div class="col-md-12 form-wrapper">
          <h2> MUUDA ANDMEID </h2>
          <h3>| {{ shop.contact.companyname }} |</h3>
          <br>
          <form id="create-post-form">
               <div class="form-group col-md-12">
                <label>Nimi: </label>
                <input type="text" id="name" v-model="shop.name" name="title" 
                class="form-control" placeholder="ArtSmart">
               </div>
               <br>
                <label>KONTAKT </label>

               <div class="form-group col-md-12">
                <label> Firmanimi: </label>
                <input type="text" id="companyname" v-model="shop.contact.companyname" name="title" 
                class="form-control" placeholder="ArstSmart OÜ">
               </div>

             <div class="form-group col-md-12">
                <label> Koduleht: </label>
                <input type="text" id="homepage" v-model="shop.contact.homepage" name="title" 
                class="form-control" placeholder="www.artsmart.ee">
            </div>

            <div class="form-group col-md-12">
                <label>Telefon: </label>
                <input type="text" id="phone" v-model="shop.contact.phone" name="title" 
                class="form-control" placeholder="+372 5647 7889">
            </div>

            <div class="form-group col-md-12">
                <label> E-mail: </label>
                <input type="text"  id="email" v-model="shop.contact.email" name="title" 
                class="form-control" placeholder="info@artsmart.ee">
            </div>

            <br>
            <label>ASUKOHT</label>

              <div class="form-group col-md-12">
                  <label> Riik: </label>
                  <input type="text"  id="contry" v-model="shop.location.country" name="title" 
                  class="form-control" placeholder="Eesti">
              </div>

              <div class="form-group col-md-12">
                  <label> Linn: </label>
                  <input type="text"  id="city" v-model="shop.location.city"  name="title" 
                  class="form-control" placeholder="Tallinn">
              </div>

              <div class="form-group col-md-12">
                  <label> Aadress: </label>
                  <input type="text" id="address" v-model="shop.location.address"  name="title" 
                  class="form-control" placeholder="Järvevana tee 3">
              </div>

              <div class="form-group col-md-12">
                  <label> Postiindeks: </label>
                  <input type="text" id="postcode" v-model="shop.location.postcode"  name="title" 
                  class="form-control" placeholder="10112">
              </div>

            <br>
              <br>
                <b-button size="sm" variant="outline-primary" @click="updateShop">Muuda andmeid</b-button>    
          </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'add',
    data () {
        return {
            shop:{
                name: '',
                contact: {
                    companyname: '',
                    homepage: '',
                    phone: '',
                    email: ''
                },
                location: {
                    country: '',
                    city: '',
                    address: '',
                    postcode: ''
                }
            },
        }},
    
    created: function() {
        console.log(this.$route.params.id)
        this.getShop(this.$route.params.id)
    },

    methods: {    
        getShop(id) {
            axios ({
                url: `/api/shops/${id}`,
                method: 'GET',
            }).then((response) => {
            console.log(response);
            this.shop = response.data.Shop
            })
        },
        
        updateShop() {

        let updateShop = {
                name: this.shop.name,
                companyname: this.shop.contact.companyname,
                homepage: this.shop.contact.homepage,
                phone: this.shop.contact.phone,
                email: this.shop.contact.email,
                country: this.shop.location.country,
                city: this.shop.location.city,
                address: this.shop.location.address,
                postcode: this.shop.location.postcode,
        };
        console.log(updateShop)
        axios.patch('/api/shop/' + this.$route.params.id, updateShop)
        .then((response) => {
                console.log(response);
                this.$router.push("/")   
            })
            .catch ((error) => {
                console.log(error.message)
            });
    },



}} 
</script>

<style >

form{
    width: 400px;
    text-align: left
}
    
</style>