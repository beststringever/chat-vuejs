<template>
  <div id="app" class="container-fluid app-wrapper">
    <div class="row">
      <SocialMenu />
      <InboxMenu />
      <MenuContent :friends="friendsList" v-if="userData" @friendChanged="friendId = $event"/>
      <Chat :friend="currentFriend" v-if="currentFriend" />
      <ProfileInfo />
    </div>
  </div>
</template>

<script>
import Chat from './components/Chat.vue'
import SocialMenu from './components/SocialMenu.vue'
import InboxMenu from './components/InboxMenu.vue'
import MenuContent from './components/MenuContent.vue'
import ProfileInfo from './components/ProfileInfo.vue'

export default {
  name: 'app',
  components: {
    Chat,
    SocialMenu,
    InboxMenu,
    MenuContent,
    ProfileInfo
  },
  data(){
    return {
      userData: null,
      friendsList: [],
      friendId: null
    }
  },
  methods: {
    getFriends(){
      fetch('https://raw.githubusercontent.com/karthikJagadeesh/fake-chat-api/master/db.json')
        .then(response => response.json())
        .then(json => {
              this.userData = json
              this.friendsList = this.userData.profile.friends
        }).catch( error => { console.log(error); });
    }
  },
  computed: {
    currentFriend() {
      let itemObj = this.userData.friends[0]
      if(this.friendId){
        this.userData.friends.forEach(item => {
          if(item.id == this.friendId){
            itemObj = item
          }
        })
      } 
      return itemObj
    }
  },
  created(){
    this.getFriends()
  }
}
</script>

<style lang="scss">

html { font-size:62.5%; }
body { font-size:1.6rem; font-family: 'Roboto', sans-serif; }

.block-wrapper { height:100vh; }

.profile-info {
  background-color: white; flex-grow:3;
}
</style>
