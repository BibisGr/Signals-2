import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-mode',
  imports: [],
  templateUrl: './mode.html',
  styleUrl: './mode.css',
})
export class Mode {

  isDark = signal<boolean>(false)

  toogle(){
    this.isDark.update(d => !d)
  }

  name = signal<string>('');
  length = computed(()=>this.name().length);

  changeName(event: any){
    this.name.set(event.target.value)
  }

}
