import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  signal,
  viewChild,
  ViewChild,
} from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild("form") private form?: ElementRef<HTMLFormElement>;
  // @Output() add = new EventEmitter<{ title: string; text: string }>()
  enteredTitle = signal("");
  enteredText = signal("");
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  add = output<{ title: string; text: string }>();

  // onSubmit(title: string, text: string) {
  //   this.add.emit({ title, text });
  //   this.form().nativeElement.reset();
  // }
 
  onSubmit() {
    this.add.emit({ title: this.enteredTitle(), text: this.enteredText() });
    this.enteredTitle.set("");
    this.enteredText.set("");
  }

  ngOnInit() {
    console.log("init");
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log("after");
    console.log(this.form().nativeElement);
  }
}
