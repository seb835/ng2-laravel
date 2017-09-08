import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class QuoteService {
    constructor(private http: Http) {

    }

    getQuotes() {
        return this.http.get('http://laravel-ng2-vue.app/api/quotes')
            .map(
                (response: Response) => {
                    return response.json().quotes;
                }
            );
    }
}
