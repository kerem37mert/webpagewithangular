import {Component, input} from "@angular/core";
import {FieldTree, FormField} from '@angular/forms/signals';

type inputSize = "small" | "medium" | "large";
type inputType = "text" | "password";

@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.html",
  styleUrls: ["./text-input.scss"],
  imports: [
    FormField
  ]
})

export default class TextInput {
  placeholder = input<string>("");
  field = input<FieldTree<string>>();
  label = input<string>();
  size = input<inputSize>("medium");
  type = input<inputType>("text");
}
