export interface Game{
    id:string;
    background_image:string;
    name:string;
    released: string;
    metacritic_rul:string;
    website:string;
    description:string;
    metacritic:number;
    genres:Array<Genre>;
    parent_platforms:Array<ParentPlatforms>;
    publishers:Array<Publishers>;
    ratings:Array<Rating>;
    short_screenshots:Array<ShortScreenshots>;
    trailers:Array<Trailer>;
    metacritic_url:string;
    

}
export interface APIResponse<T>{
    results:Array<T>;
}
interface Genre{
    name:string;
}
interface ParentPlatforms{
    platform:{
        slug:string;
        name:string;
    };
}
interface Publishers{
    name:string;
}

interface Rating {
id:number;
count:number;
title:string;
}

interface ShortScreenshots{
    id:string
    image:String;
}

interface Trailer{
    data:{
        max:string;
    };
}