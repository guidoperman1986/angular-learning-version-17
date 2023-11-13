import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingComponent } from "../housing/housing.component";
import { HousingLocation } from "../interfaces/housing.interface";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (location of filteredLocationList; track location.id) {
      <app-housing [housingLocation]="location" />
      }
    </section>
  `,
  styleUrls: ["home.component.css"],
})
export class HomeComponent {
  housingLocationList!: HousingLocation[];
  housingService = inject(HousingService);
  filteredLocationList!: HousingLocation[];

  constructor() {
    this.housingLocationList = this.housingService.housingLocationList;
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    console.log(text)
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
