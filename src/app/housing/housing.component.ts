import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../interfaces/housing.interface";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['details', housingLocation.id]">Learn more</a>
    </section>
  `,
  styleUrls: ["housing.component.css"],
})
export class HousingComponent {
  @Input() housingLocation!: HousingLocation;
}
