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

        /**
         * cancella al click l'elemento dalla lista
         * @param {number} index indice array
         */
        cancella(index){
            this.lista.splice(index,1);
            console.log(this.lista[index]);
        },

        /**
         * inserisce l'elemento nella lista
         */
        inserisci(){
            if(this.newItem != ""){
                this.lista.push({
                    impegno: this.newItem,
                    completato: false,
                })
                this.newItem = "";
                this.$refs.input.focus();
            }
        },

        /**
         * scambia il valore da true a false alla proprietà 
         * completato dell'elemento
         * @param {number} index indice array
         */
        completo(elemento){
            elemento.completato = !elemento.completato;
        },
    },
    // END APP VUE
})