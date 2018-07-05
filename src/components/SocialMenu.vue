<template>
    <div class="col block-wrapper social-menu">
        <div class="menu-icon"><i class="material-icons">menu</i></div>
        <ul class="social-menu__container justify-content-center">
            <li class="social-menu__item-wrapper active"><img src="@/assets/img/social01.png" alt=""></li>
            <li class="social-menu__item-wrapper"><img src="@/assets/img/social04.png" alt=""></li>
            <li class="social-menu__item-wrapper"><img src="@/assets/img/social03.png" alt=""></li>
            <li class="social-menu__item-wrapper"><img src="@/assets/img/social02.png" alt=""></li>
            <li class="social-menu__item-wrapper"><img src="@/assets/img/social05.png" alt=""></li>
        </ul>
    </div>
</template>

<style lang="scss">

$headerHeight: 6rem;

.social-menu { 
    background-color: #1d232a; width:8rem; max-width:8rem; flex-grow:1; padding:0; box-shadow: inset -.1rem 0 1rem 0 rgba(0,0,0,.3);
    
    &__container { padding:1.5rem 0; margin:0; text-align:center; }
    &__item-wrapper { padding: .5rem 0; margin-bottom:.5rem; position:relative; cursor:pointer;
        img { max-width:4rem; position:relative; z-index:1; }
        &::before { 
            content:''; 
            position:absolute; 
            bottom:0; 
            left:2rem; 
            top:0; 
            right:0; 
            background-color: #272e36;
            border-radius:.3rem;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            box-shadow: -.3rem 0 1rem 0 rgba(0,0,0,.3);
            visibility:hidden;
            z-index:0;
            transition:.1s ease-in-out;
        }
        &.active::before,
        &:hover::before { left:.8rem; visibility: visible; }
    }
    .menu-icon { 
        color:white; 
        height:$headerHeight; 
        display:flex; 
        justify-content:center; 
        align-items:center; 
        cursor:pointer; 
    }
}
</style>

