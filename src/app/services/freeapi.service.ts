import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class freeApiService {
  constructor(private httpClient: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/albums");
  }

  getPhotosForselectdAlbumByParameter(
    selectedAlbumId: string
  ): Observable<any> {
    let params1 = new HttpParams().set("albumId", selectedAlbumId);
    return this.httpClient.get("https://jsonplaceholder.typicode.com/photos", {
      params: params1
    });
  }
}
