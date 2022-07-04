const app = Vue.createApp({
    data: function(){
        return{
            name: ' ',
            age: ' '
        }
    },
    methods:{
        validate(){
            if (this.age < 17){
                alert('you have to enter your details.');
            } else {
                if (this.name = ''){
                    alert('yo')
                } else {
                    document.querySelector('#output').innerHTML = `${this.name} ${this.age}`
                }
            } 
        }
    }
})

app.mount('#vue')