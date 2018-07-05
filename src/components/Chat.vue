<template>
  <div class="col block-wrapper chat">
    <div class="chat__header"></div>
    <div class="chat__window">
        <ul class="chat__messages-wrapper" v-chat-scroll>
            <li class="chat__message" v-for="message in friend.chatlog" :key="message.id">
              <div class="chat__m-img-wrapper"><img class="chat__m-img" :src="profileImge" /></div>
              <span class="chat__m-time">{{ message.timestamp }}</span>
              <span class="chat__m-content">{{ message.text }}</span>
            </li>
        </ul>
    </div>
    <div class="chat__new-message">
        <NewMessage/>
    </div>
  </div>
</template>

<script>
    import NewMessage from '@/components/NewMessage'
    import moment from 'moment'

    export default {
        name: 'Chat',
        props: ['friend'],
        components: {
            NewMessage
        },
        data(){
            return {
                //profileImg: this.friend.picture
            }
        },
        computed: {
            profileImge(){
                return this.friend.picture
            }
        }
    }
</script>

<style lang="scss">
$borderColorLight: #dadfe4;
$headerHeight: 6rem;
.chat {
    background-color: #e9edf2; 
    flex-grow:7; 
    display: flex; 
    flex-direction:column; 
    height:100%;
    padding:0;

    &__header { height:$headerHeight; border-bottom: 1px solid $borderColorLight; background-color:white; }
    &__window { flex-grow:1; }
    &__new-message { 
        background-color:white; 
        height:6rem; 
        display:flex; 
        align-items:center; 
        border-top:1px solid $borderColorLight; 
    }
    &__messages-wrapper { padding:0; }
    &__message { list-style: none; padding:1.5rem;}
    &__m-img-wrapper { overflow:hidden; border-radius:50%; max-width:4rem; margin-right:1rem; }
    &__m-img { width:100%; }
    &__m-time { font-size:1.2rem; }
    &__m-content {  }
}
</style>
