import {IMovie} from "./movieInterface";

export interface IPagination {
    page:string;
    results:IMovie[];
    total_pages:number;
    total_results:number;
}