export class House {
    id?: number;
    title: string;
    location: string;
    price: string;
    description: string;
    wc: string;
    rooms: string;

    constructor(title: string, location: string, price: string, description: string, wc: string, rooms: string) {
        this.title = title;
        this.location = location;
        this.price = price;
        this.description = description;
        this.wc = wc;
        this.rooms = rooms;
    }
}
