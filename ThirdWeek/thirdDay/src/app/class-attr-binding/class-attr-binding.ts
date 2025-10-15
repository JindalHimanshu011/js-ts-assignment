import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-attr-binding',
  imports: [CommonModule],
  templateUrl: './class-attr-binding.html',
  styleUrl: './class-attr-binding.css'
})
export class ClassAttrBinding {

  isActive: Boolean = false;
  isHighlight: Boolean = false;

  bgColor = 'lightgreen';
  textColor = 'pink';
  fontSize = 14;

  public toggle(): void {
    this.isActive = !this.isActive;
  }

  public changeStyle(): void {
    this.bgColor = 'gray';
    this.textColor = 'yellow';
    this.fontSize = 20;
  }


}
