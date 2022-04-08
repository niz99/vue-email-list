var app = new Vue(
    {
        el: '#root',
        data: {
            listaMail: []
        },
        created(){

            for(i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (res) => {
                    console.log(res.data.response)
                    this.listaMail.push(res.data.response)

                })
            }
            
        },
        methods: {
            
        }
    }
)