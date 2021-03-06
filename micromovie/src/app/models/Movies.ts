export interface Movies{
//id:number;
title: string; 
poster_path:string;
genre_ids:Array<number>;
original_language:string;
budget:number;
Descripcion:string;
overview:number;
production_companies:Array<Object>;
release_date:string;
status_message:string;
}

interface genre_ids{
    id:number;
    name:string;
}

interface  production_companies{
    name:string;
    id:number;
    logo_path:string;
    origin_country:string;
}
