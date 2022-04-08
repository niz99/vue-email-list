var app = new Vue(
    {
        el: '#root',
        data: {
            mail: ''
        },
        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (res) => {
                console.log(res.data.response)
                for(i=0; i<10; i++){
                    this.mail = res.data.response
                }
                
            })
        },
        methods: {
            
        }
    }
)