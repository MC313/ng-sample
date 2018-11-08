import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Shoe } from './Shoe';

@Injectable({ providedIn: 'root' })
export class ShoeService {
    constructor(private http: HttpClient) { }

    getShoes(): Observable<Shoe[]> {
        return this.http.get('../../assets/data/shoes.json').pipe(
            map((response: Shoe[]) => response)
        );
    }

}
