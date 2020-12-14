var app = new Vue({
    el: '#app',
    data: {
      message: 'Hola Michael!',
      tittle: 'Gestor de Tareas',
      sesion: '5',
      tareas: [],
      nuevaTarea: '',
      ckecked : false,
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