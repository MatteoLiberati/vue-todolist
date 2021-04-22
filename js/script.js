const app = new Vue({
    el:"#app",
    mounted(){},
    data:{
        lista:[
            {
                impegno: 'Fare la spesa',
                completato: false,
            },
            {
                impegno: 'Cambiare password Google',
                completato: false,
            },
            {
                impegno: 'Ordinare piante giardino',
                completato: true,
            },
            {
                impegno: 'Sistemare profilo',
                completato: false,
            },
            {
                impegno: 'Organizzare festa Lorenzo',
                completato: true,
            },
            {
                impegno: 'Aggiustare cassa audio macchina',
                completato: false,
            },
            {
                impegno: 'Realizzare nuovo logo',
                completato: false,
            },
            {
                impegno: 'Lavare macchine',
                completato: false,
            },
        ],
        newItem: "",
    },
    methods:{
        cancella(index){
            this.lista.splice(index,1);
            console.log(this.lista[index]);
        },
        inserisci(){
            this.lista.push({
                impegno: this.newItem,
                completato: false,
            })
            this.newItem = "";
            this.$refs.input.focus();
        }
    },

    // END APP VUE
})