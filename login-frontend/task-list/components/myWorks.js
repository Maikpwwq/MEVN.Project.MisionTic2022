Vue.component('MisTareas',{
    template : 
    `
    <div class="container mt-5">
        <h1>
            Componente Mis Tareas
        </h1>

        <input type="text" class="form-control mt-5" v-model="nuevaTarea" v-on:keyup.enter="agregarTarea">

        <label for="checkbox"> Asignar como Realizada </label>
        <input type="checkbox" v-model="checked" id="checkbox">
        

        <button class='btn btn-dark w-100' @click="agregarTarea"> Agregar tarea</button>

        <div class="mt-5">
            <pre>
                {{ $data }}
            </pre>
        </div>

        <div class="mt-3" v-for="(item, index) of tareas" :key="item.id">
            <!-- v-on v-bind -->
            <div :class="[item.estado? 'alert-success' : 'alert-warning']" class="alert alert-light" role="alert">

                <div class="d-flex justify-content-between align-items-center">
                    <div class="col-6"> {{item.nombre}} </div>
                    <div v-if="item.estado"> 
                        <span>Si</span>
                    </div>
                    <div v-else>
                        <span>No</span>
                    </div>
                    <div> 
                        <button class="btn btn-success" @click="editarTarea(index)"> Ok </button> 
                        <button class="btn btn-danger" @click="eliminarTarea(index)"> X </button> 
                    </div>
                </div>

            </div>
        </div>

    </div>
    `,
    data(){
        return {
            tareas: [],
            nuevaTarea: '',
            ckecked : false,
        }
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: this.checked,
            });
            console.log(this.nuevaTarea);
            this.nuevaTarea = '';
            this.checked= false;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
        },
        editarTarea(index){
            console.log('editando....');
            if (this.tareas[index].estado){
                this.tareas[index].estado = false;
            } else {
                this.tareas[index].estado = true;
            }            
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
        },
        eliminarTarea(index){
            if (!this.tareas[index].estado){
                this.tareas.splice(index,1);
                localStorage.setItem('tareas-vue', JSON.stringify(this.tareas))
            }            
        }
    },
    computed: {},
    beforeCreate: {},
    methods: {},
    mounthed(){
        
    },
    created() {
        let datosDB = JSON.parcer(localStorage.getItem('tareas-vue'));
        if (datosDB === null) {
            this.tareas = []
        } else {
            this.tareas = datosDB;
        }
    },
})