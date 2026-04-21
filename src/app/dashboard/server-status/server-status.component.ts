import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit {
  currentStatus: "online" | "offline" | "unknown" = "offline";
  private destroyRef? = inject(DestroyRef);

  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus = "online";
      } else if (random < 0.9) {
        this.currentStatus = "offline";
      } else {
        this.currentStatus = "unknown";
      }
    }, 3000);

    this.destroyRef?.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
