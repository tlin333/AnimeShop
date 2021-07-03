import { Component } from "@angular/core";
import { InventoryService } from "../inventory/inventory.service";
import { animeService } from "./anime.service";


@Component({
    selector: 'app-anime',
    template: `
        <h4>Anime Shop</h4>

        <select (change)="filterItems($event)">
        <option>Action Figure</option>
        <option>Manga</option>
        <option>Blue-ray</option>
        <option>Novel</option>
        <option>Poster</option>
        <option>Key Chain</option>
        </select>

        <div [ngClass]="{favourite:a.fav}" *ngFor="let a of anime">
        <h4>{{a.title}}</h4>
        {{a.price}}<br>
        <button (click)="setFavorite(a)">Like</button><button (click)="addToInv(a)">Add to Inventory</button>
        </div>
    `,
    styles: [
        `
        .favourite{
            background-color: pink
        }
        `
    ]
})

export class animeComponent {
    anime = []
    constructor(private aService:animeService,private iService:InventoryService){

    }

    ngOnInit(){
        this.anime = this.aService.getAnime()
    }

    filterItems(e){
        this.anime = this.aService.filter(e.target.value)
    }

    setFavorite(a){
        this.aService.updateFav(a.title)
    }

    addToInv(a){
        this.iService.add(a)
    }
}