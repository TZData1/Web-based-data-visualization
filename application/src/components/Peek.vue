<template>
    <div class="peek">
        <div class="peekBox" id="first">
            <div class="peekShow">
                <p class="key"> Mitgliederzahl </p>
                <p class="value"> 22 </p>
            </div>  
            <PeekChart :data="data1"/>  
        </div>
        <div class="peekBox" id="second">
            <div class="peekShow">
                <p class="key"> Neue Mitglieder</p>
                <p class="value"> 22 </p>
            </div>  
            <PeekChart :data="data2"/>  
        </div>
        <div class="peekBox" id="third">  
            <div class="peekShow">
                <p class="key"> Bewerbungen </p>
                <p class="value"> 0 </p>
            </div>   
            <PeekChart :data="data3"/>  
        </div>
        <div class="peekBox" id="fourth">
            <div class="peekShow">
                <p class="key"> Mitgliederbeschwerden </p>
                <p class="value"> 0 </p>
            </div>  
            <PeekChart :data="data4"/>  
        </div>
    </div>
    <!-- grid-template-columns: 20% 20% 20% 20%;
         grid-gap: 50px; -->
</template>

<script>
import PeekChart from './PeekChart'

export default {
    name: "Peek",
    components: {
        PeekChart
    },
    props: [
        "data1",
        "data2",
        "data3",
        "data4"
    ]
}
</script>

<style scoped>
    
.peek{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.peek .peekBox {
    flex: 0 1 50px;
    margin: 50px 50px;
    border-radius: 20px;
}
.peekBox .key{
    color: #FFFF;
    margin: 20px 20px 0px 20px 
}
.peekBox .value{
    color: #FFFF;
    margin: 0px 20px 20px 20px
}


#first {
    background-color:rgb(113, 122, 252);
}
#second {
    background-color:rgb(145, 117, 242);
}
#third {
    background-color:rgb(249, 183, 125);
}
#fourth {
    background-color:rgb(248, 136, 113);
}

</style>

