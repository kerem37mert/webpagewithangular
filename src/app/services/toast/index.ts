import {Service, signal} from '@angular/core';
import { v4 } from "uuid";

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  autoClose: boolean;
  duration: number;
}

@Service()
export class ToastService {
  toasts = signal<Toast[]>([]);

  show(type: ToastType, message: string, autoClose: boolean = false, duration:number = 3000) {
    const id = v4();
    this.toasts.set([...this.toasts(), { id, message, type, autoClose, duration }]);

    if (autoClose) {
      setTimeout(() => this.dismiss(id), duration);
    }
  }

  dismiss(id: string) {
    this.toasts.set(this.toasts().filter((t) => t.id !== id));
  }
}
