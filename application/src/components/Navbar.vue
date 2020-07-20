<template>
    <nav>
        <img alt="Vue logo" src="../assets/lumos_logo.svg" class="img">
        <Dropdown title="Select Department"  :items="services" />
    </nav>
</template>

<script>
import Dropdown from './Dropdown'

export default {
    name: 'navbar',
    components: {
        Dropdown
    },
    data() {
        return {
            services: [ 
                {
                    title: 'Academy',
                    link: 'academy'
                },
                {
                    title: 'Finance',
                    link: 'finance'
                },
                                {
                    title: 'HR',
                    link: 'hr'
                },
                                {
                    title: 'Marketing',
                    link: 'marketing'
                },
                {
                    title: 'Recruiting',
                    link: 'recruiting'
                },
                                {
                    title: 'Sales',
                    link: 'sales'
                }
            ]
        }
    }
}
</script>

<style>

.img{
    height: 30px;
}

nav{
    display: flex;
    align-items: center;

    position: relative;
    padding: 0px 50px
}

nav.menu-item.active,
nav .menu-item:hover{
    background-color: rgb(71, 70, 70);
    border-bottom-color: #FFF;
}

nav .menu-item {
    color: #FFF;
    padding: 10px 20px;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    position: relative;
    margin-left: auto;
    box-sizing: content-box;
}

nav .menu-item a {
    color: inherit;
    text-decoration:none;
}



</style>


