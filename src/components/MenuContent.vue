<template>
      <div class="col block-wrapper menu-content">
            <div class="menu-content__search-wrapper">
                  <input type="text" class="menu-content__search-input" placeholder="search">
            </div>
            <div class="menu-content__list">
                  <div class="media menu-content__item-wrapper" 
                  v-for="friend in friends" 
                  :key="friend.id"
                  @click="openChat(friend.id)">
                        <div class="menu-content__contact-img-wrapper">
                              <img class="menu-content__contact-img" :src="friend.picture" alt="">
                        </div>
                        <div class="media-body">
                              <h5 class="menu-content__contact-title">{{ friend.name }}</h5>
                              <span class="menu-content__contact-msg">{{ friend.lastChat | truncate }}</span>
                        </div>   
                  </div>
            </div>
            
      </div>    
</template>


<script>

      export default {
            name: 'MenuContent',
            props: ['friends'],
            data(){
                  return{
                        
                  }
            },
            methods: {
                  openChat(friend){
                        //console.log(friend)
                        this.$emit('friendChanged', friend);
                  }
            }
      }
</script>


<style lang="scss">
%flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
$borderColor: #343b42;
$headerHeight: 6rem;

.menu-content { 
      box-shadow: -.3rem 0 1rem 0 rgba(0,0,0,.3); 
      background-color: #2d333c; 
      flex-grow:4; 
      padding:0; 
      display: flex;
      flex-direction: column;
      
      &__search-wrapper { height:$headerHeight; @extend %flex-center; padding:0 1.5rem; border-bottom:1px solid $borderColor; }
      &__search-input { 
            background-color:#353d45; 
            border:none;
            border-radius: 5rem;
            width:100%;
            padding:.5rem 1rem;
            color:white; 
            font-size:1.2rem;
      }
      &__list { height:calc(100vh -6rem); overflow:auto; }
      &__item-wrapper { line-height:1; margin:3rem 0; display:flex; align-items:center; cursor:pointer; padding:0 1.5rem; }
      &__contact-img-wrapper { overflow:hidden; border-radius:50%; max-width:4rem; margin-right:1rem; }
      &__contact-img { width:100%; } 
      &__contact-title { color:white; font-size:1.4rem; margin-bottom:0; }
      &__contact-msg { color:white; font-size:1.2rem; color: rgb(136, 136, 136); }
}

</style>
