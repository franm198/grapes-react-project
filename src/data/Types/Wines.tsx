type Wines = {
    type: 'red' | 'white' | 'sparkling';
    winery: string;
    wine: string;
    rating: Rating;
    location: string;
    image: string;
    id: number;
}

type Rating = {
    average: string; 
    reviews: string;
}

export default Wines;