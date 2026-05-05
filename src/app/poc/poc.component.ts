import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-poc",
  standalone: true,
  templateUrl: "./poc.component.html",
  styleUrl: "./poc.component.css",
})
export class PocComponent {
  private readonly route = inject(ActivatedRoute);

  target = this.route.snapshot.queryParamMap.get("target");
  researcher = this.route.snapshot.queryParamMap.get("researcher");
  reference = this.route.snapshot.queryParamMap.get("ref");
}
