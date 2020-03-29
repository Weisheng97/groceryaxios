import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Covid Total Cases in US',
               data:[],
              borderWidth:0.5,
              borderColor:"magenta",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
          responsive: true,
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key]["cases"])
            this.chartdata.labels.push(this.results[key]["timestamp"])
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}
