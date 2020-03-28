<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
        <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div id ="chart">
            <h1>Call Third Party API's</h1>
            <CallAPI></CallAPI>
        </div>
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import CallAPI from '../CallAPI.js'


export default {
    components:{
        axiosExample,PSIIndex,CallAPI
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:280px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
h1{
    font-size: 14px;
}
</style>