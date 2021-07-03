import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class animeService {
    anime = [
        {title:'Madoka Magica Action Figure',item:'Action Figure',price:200,fav:false},
        {title:'Madoka Magica Manga',item:'Manga',price:60,fav:false},
        {title:'Madoka Magica Blue-ray',item:'Blue-ray',price:100,fav:false},
        {title:'Madoka Magica Poster',item:'Poster',price:10,fav:false},
        {title:'Madoka Magica Key Chain',item:'Key Chain',price:4,fav:false},
        {title:'Madoka Magica Novel',item:'Novel',price:50,fav:false},
        {title:'One Piece Action Figure',item:'Action Figure',price:120,fav:false},
        {title:'One Piece Manga',item:'Manga',price:30,fav:false},
        {title:'One Piece Poster',item:'Poster',price:5,fav:false},
        {title:'Dragon Ball Action Figure',item:'Action Figure',price:100,fav:false},
        {title:'Dragon Ball Manga',item:'Manga',price:25,fav:false},
        {title:'Dragon Ball Poster',item:'Poster',price:5,fav:false},
        {title:'Naruto Action Figure',item:'Action Figure',price:90,fav:false},
        {title:'Naruto Manga',item:'Manga',price:20,fav:false},
        {title:'Naruto Poster',item:'Poster',price:5,fav:false},
        {title:'Hatsune Miku Poster',item:'Poster',price:10,fav:false},
        {title:'Hatsune Miku Key Chain',item:'Key Chain',price:3,fav:false},
        {title:'Re:zero Novel',item:'Novel ',price:30,fav:false},
        {title:'Re:zero Action Figure',item:'Action Figure',price:180,fav:false},
        {title:'Re:zero Key Chain',item:'Key Chain',price:3,fav:false},
        {title:'Re:zero Blue-ray',item:'Blue-ray',price:65,fav:false},
        {title:'Overlord Novel',item:'Novel',price:30,fav:false},
        {title:'Overlord Manga',item:'Manga',price:25,fav:false},
        {title:'Overlord Blue-ray',item:'Blue-ray',price:50,fav:false},
        {title:'That Time I Got Reincarnated as a Slime Action Figure',item:'Action Figure',price:175,fav:false},
        {title:'That Time I Got Reincarnated as a Slime Manga',item:'Manga',price:35,fav:false},
        {title:'That Time I Got Reincarnated as a Slime Novel',item:'Novel',price:30,fav:false},
        {title:'That Time I Got Reincarnated as a Slime Key Chain',item:'Key Chain',price:3,fav:false},
        {title:'That Time I Got Reincarnated as a Slime Blue-ray',item:'Blue-ray',price:70,fav:false},
        {title:'So I am a Spider, So what? Novel',item:'Novel',price:30,fav:false},
    ]
        

    getAnime(){
        return this.anime
    }

    filter(item){
        return this.anime.filter(a=>a.item === item)
    }

    updateFav(title){
        this.anime.forEach(a => {
            if(a.title === title) {
                a.fav = !a.fav
            }
        })
    }
}