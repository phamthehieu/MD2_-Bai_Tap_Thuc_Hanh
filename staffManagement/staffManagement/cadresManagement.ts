import {Cadres} from "../Cadres/Cardres";
import {Interface} from "./IManagement";

export class CadresManagement implements Interface<Cadres>{
    public listCadres: Cadres[] = [];
   add(t: Cadres): void {
        this.listCadres.push(t);
    }

    findAll(): Cadres[] {
        return this.listCadres;
    }

    search(name: string): Cadres | string {
       for (let i = 0; i < this.listCadres.length;i++) {
           if (this.listCadres[i].getName() === name) {
               return this.listCadres[i];
           }
       }
       return ' khong co ';
    }
    // searchByName(name: string): Cadres | string {
    //    this.listCadres.filter((item)=>{
    //        item.getName().includes(name)
    //    })
    //    return ' khong co ';
    // }


}