<template>
    <div class="col block-wrapper inbox-menu">
        <h1 class="inbox-menu__title">Inbox<i class="material-icons add-something">person_add</i></h1>
        <ul class="inbox-menu__list-container">
            <li class="inbox-menu__item-wrapper"><a href="#" >All Messages</a><span class="items-num">21</span></li>
            <li class="inbox-menu__item-wrapper active"><a href="#" >Unread</a><span class="items-num">21</span></li>
            <li class="inbox-menu__item-wrapper"><a href="#" >Important</a><span class="items-num">21</span></li>
            <li class="inbox-menu__item-wrapper"><a href="#" >Drafts</a><span class="items-num">21</span></li>
        </ul>
        <ul class="inbox-menu__list-container">
            <li class="inbox-menu__item-wrapper"><a href="#" >Teams</a><span class="items-num">21</span></li>
            <li class="inbox-menu__item-wrapper"><a href="#" >Groups</a><span class="items-num">21</span></li>
            <li class="inbox-menu__item-wrapper"><a href="#" >Channels</a><span class="items-num">21</span></li>
            <li class="inbox-menu__item-wrapper"><a href="#" >Locations</a></li>
            <li class="inbox-menu__item-wrapper"><a href="#" >Media</a><span class="items-num">21</span></li>
        </ul>
        <ul class="inbox-menu__list-container">
            <li class="inbox-menu__item-wrapper"><a href="#" >Help</a></li>
            <li class="inbox-menu__item-wrapper"><a href="#" >Settings</a></li>
        </ul>
    </div>
</template>


<style lang="scss">

%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

$borderColor: #343b42;
$headerHeight: 6rem;

.inbox-menu {
    color:white; background-color: #272e36 ; flex-grow:2;

    &__list-container { font-size:1.4rem; padding: 2rem 0; margin:0; list-style: none; border-bottom:1px solid $borderColor; }
    &__list-container:last-child { border-bottom:none; }
    &__item-wrapper { padding:.5rem 1rem; cursor:pointer; display:flex; justify-content:space-between; align-content:center; transition:.2s ease-in-out;
        a { color:#a0a4a7; text-decoration: none; }
    }
    &__item-wrapper.active,
    &__item-wrapper:hover { border-radius:.3rem; background-color:#353d45; 
        a { color:white; }
    }
    .items-num { font-size:1rem; @extend %flex-center; }
    &__title { font-size:2.2rem; padding:1rem; height: $headerHeight; display: flex; align-items: center; }
    .add-something { 
        position:absolute; 
        right:1.5rem; 
        font-size:1.3rem; 
        width:3rem; 
        height:3rem; 
        border-radius:50%; 
        cursor:pointer;
        border:1px solid $borderColor; 
        @extend %flex-center;
    }
}
</style>
