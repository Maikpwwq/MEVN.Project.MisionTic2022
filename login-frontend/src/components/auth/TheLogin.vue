<template>
              <!-- 
              <div class="form-group col-md-4">
                <label for="inputNamel4">Nombre</label>
                <input type="email" placeholder="El Nombre de usuario aquí" class="form-control" id="inputNamel4" v-model="login.name">
              </div>
              -->
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
    
        <form class="text-center border border-primary p-5"
              style="margin-top:70px;height:auto;padding-top:100px !important;"
              @submit.prevent="loginUser" >
              <h1 class="h3 mb-3 font-weight-normal" style="textalign: center"> Iniciar de sesión</h1>
              <div class="form-row d-flex justify-content-center">
              
                <!-- Campo de email de usuario -->
                <div class="form-group col-md-8">
                  <label for="inputEmail">Email</label>
                  <input type="email" placeholder="Ingrese un email valido" class="form-control mb-5" id="inputEmail" v-model="login.email">
                </div>
                <!-- campo de clave de usuario -->
                <div class="form-group col-md-8">
                  <label for="inputPassword">Password</label>
                  <input type="password" placeholder="Registre la contraseña" class="form-control mb-5" id="inputPassword" v-model="login.password">
                </div>
              </div>          

              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-4">
                  <button type="submit" 
                          class="btn btn-primary btn-block w-75 my4" @click.prevent="loginUser"
                          >Submit</button>        
                </div>                          
              </div>          
        </form>

        <div class="form-group col-md-12">
          <pre>
              {{login}}
          </pre>
        </div>    

      </div>          
    </div>          

  </div>  
</template>

<script>
import swal from 'sweetalert';

export default {
    data(){
        return{
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods:{
        // Maneja el evento de hacer click en el boton inicio
        async loginUser(){
            try {
                //let response = await this.$http.post('/api/users/login', this.login);
                let response = await this.$http.post('/api/auth/signin', this.login);
                console.log(response.data);
                let token = response.data.tokenReturn;
                let user = response.data.user

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));

                if (token){
                  swal("Login exitoso!", "Los datos son correctos, bienvenido!", "success");
                    this.$router.push('/home')
                }
            }
            catch(error) {
                swal("Oops!", "Algo salió mal!", "error"); // warning
                console.log(error)
            }
        }
    }
}
</script>