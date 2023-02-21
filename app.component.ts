import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SHOPPING CART';
list: any[] = [];
id = 0;

addItems(item: string, quantity: string) {
this.list.push({ id: this.list.length, name:
item, quantity: quantity });
console.warn(this.list);
}
remove(temp: number): void {
console.log(temp);
this.list = this.list.filter((item: any) =>
item.id !== temp ? item : null
);
}
}

