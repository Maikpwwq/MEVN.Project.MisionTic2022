<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav nav-tabs justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/servicios">Servicios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/about">About</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="logOut"> Cerrar Sesión </button>
        </form>    
      </div>
      <div>
            <p>Bienvenido!</p>
            <ul class="list-group">
                <li class="list-group-item">
                    <span>Nombre:</span> {{user.nombre}}
                </li>
                <li class="list-group-item">
                    <span>Email:</span> {{user.email}}
                </li>
            </ul>    
      </div>      
  </nav>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
    data(){
        return{
            user: {
                
            }
        }
    },
    methods:{
        getUserDetails(){
            //let user = localStorage.getItem('user');
            let token = localStorage.getItem('jwt');
            let user = VueJwtDecode.decode('user');
            
            if(token){
                this.user = JSON.parse(user);
            }
        },
        logOut(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/')
        }        
    },
    created(){
        this.getUserDetails();
    }
}
</script>