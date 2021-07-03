import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InventoryService{
    items = new Subject()
    temp = []

    add(anime){
        this.temp.push(anime)
        this.items.next(this.temp)
    }

    getItems(){
        return this.items
    }
}