/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: []
      }
     },

     created(){
    },
  
      methods: {
        attivaApi(){
          for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then ((res) =>{
                this.emails.push(res.data.response);
                console.log(res.data.response)
            })
          }
          
          
        }  
      },
  }).mount('#app')