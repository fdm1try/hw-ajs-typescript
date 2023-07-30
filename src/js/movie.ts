import Buyable from "./buyable";

export default class Movie implements Buyable {
    id: number;
    price: number;
    originalName: string;
    name: string;
    year: number;
    country: string;
    tagline: string;
    genres: Array<string>;
    duration: number;
    readonly count = 1;

    constructor(id: number, price: number, name: string, originalName: string, year: number, country: string, tagline: string, genres: Array<string>, duration: number){
        this.id = id;
        this.price = price;
        this.originalName = originalName;
        this.name = name;
        this.year = year;
        this.country = country;
        this.tagline = tagline;
        this.genres = [...genres];
        this.duration = duration;
    }      
}