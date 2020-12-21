import { Component, VERSION } from "@angular/core";
import { freeApiService } from "./services/freeapi.service";
import { Albums } from "./classes/albums";
import { Photos } from "./classes/photos";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  lstAlbums: Albums[];
  AlbumSelected: Number;
  lstPhotos: Photos[];

  constructor(private _freeApiService: freeApiService) {
    var observable = this._freeApiService.getAlbums();
    observable.subscribe((res: any) => {
      //   this.technologyData = res;

      this.lstAlbums = res.data;
      console.log("Pincodes:" + this.lstAlbums[0].title);
      console.log(this.lstAlbums[2].title);
    });
  }

  ngOnInit() {
    this._freeApiService.getAlbums().subscribe(data => {
      this.lstAlbums = data;
    });
  }

  onAlbumSelected(selectedAlbumId: any): void {
    this._freeApiService
      .getPhotosForselectdAlbumByParameter(selectedAlbumId)
      .subscribe(data => (this.lstPhotos = data));
  }
}
