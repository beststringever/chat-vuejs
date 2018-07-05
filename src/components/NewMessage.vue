<template>
    <form @submit.prevent="addMessage" class="new-message">
        <i class="material-icons new-message__attach">attach_file</i>
        <input type="text" class="new-message__input" name="new-message" placeholder="Type your message..." v-model="newMessage">
        <button type="submit" class="new-message__btn"><i class="material-icons">send</i></button>
    </form>
</template>

<script>

    export default {
        name: 'NewMessage',
        props: ['userName'],
        data(){
            return{
                newMessage: null
            }
        },
        methods: {
            addMessage(){
                if(this.newMessage){
                    db.collection('messages').add({
                        content: this.newMessage,
                        name: this.userName,
                        timestamp: Date.now()
                    }).catch(err => {
                        console.log(err)
                    })
                    this.newMessage = null
                }
            }
        }
    }
</script>


<style lang="scss">

.new-message {
    display:flex; align-items:center; width:100%;

    &__attach { margin:0 1.5rem; cursor:pointer; }
    &__input { flex-grow:1; border:none;}
    &__btn { 
        margin:0 1.5rem;
        background-color:#616d7a; 
        border-radius:50%; 
        border:none; 
        color:white; 
        display:flex;
        justify-content:center;
        align-items:center;
        line-height:1;
        width:4rem;
        height:4rem;
    }
}

</style>
