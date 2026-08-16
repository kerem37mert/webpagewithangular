import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragScroll]',
})
export class DragScrollDirective {
  private isDragging = false;
  private startX = 0;
  private startScrollLeft = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button !== 0) return;

    const element = event.currentTarget as HTMLElement;

    this.isDragging = true;
    this.startX = event.clientX;
    this.startScrollLeft = element.scrollLeft;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const element = event.currentTarget as HTMLElement;

    element.scrollLeft = this.startScrollLeft - (event.clientX - this.startX);
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp() {
    this.isDragging = false;
  }
}
