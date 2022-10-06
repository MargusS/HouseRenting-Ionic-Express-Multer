export class House {
    id?: number;
    title: string;
    location: string;
    price: number;
    description: string;
    wc: number;
    rooms: number;

    constructor(title: string, location: string, price: number, description: string, wc: number, rooms: number) {
        this.title = title;
        this.location = location;
        this.price = price;
        this.description = description;
        this.wc = wc;
        this.rooms = rooms;
    }
}
