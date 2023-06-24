import {defineStore} from 'pinia'
import { Country } from './countryInterface';

export const useClientStore = defineStore('clientStore',{
    state: () => {
        return {
            clientList : [] as Country[],
            search: "" as String
        };
    },
    actions: {
      fetchClient(){
        fetch('https://restcountries.com/v3.1/all').then(
          response =>response.json()
          ).then((data)=>{
              this.clientList= data
          }
        )
      }  
    }
}
) 

