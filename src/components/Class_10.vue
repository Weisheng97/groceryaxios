<template>
    <div id="main">

        <div id = "chart">
            <covid></covid>
        </div>

        <div id = "chart">
            <h1>Average ridership over the years for different types of transport</h1>
            <transport></transport>
        </div>


    </div>
</template>

<script>

import covid from '../covid.js'
import transport from '../transport.js'

export default {
    components:{
        covid,transport
    }
    
}
</script>

<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:400px;
  width:400px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
h1{
    font-size: 13px;
}
</style>