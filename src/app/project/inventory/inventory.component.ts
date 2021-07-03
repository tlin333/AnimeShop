import { Component } from "@angular/core";
import { InventoryService } from "./inventory.service";

@Component({
    selector: 'app-inventory',
    template: `
        <h4>Inventory</h4>
        <p *ngFor="let i of items">{{i.title}} {{i.price | currency}}
        <button>Delete</button>
        </p>
        <p>{{totalPrice | currency}}</p>

    `
})
export class InventoryComponent {

    items = []
    totalPrice = 0

    constructor(private iService:InventoryService){}

    ngOnInit(){
        this.iService.getItems().subscribe((data:[])=>{
            this.items = data
            let total = 0
            this.items.forEach(i=> {
                total+=i.price
            })
            this.totalPrice = total
        })
    }
}