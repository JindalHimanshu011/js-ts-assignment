import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateData {
  public UploadData(name: string): void {
    
    localStorage.setItem('name', name);
  }
}
