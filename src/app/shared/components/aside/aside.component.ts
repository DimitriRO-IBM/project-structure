import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare type MenuItem = {
  label: string,
  rootUri: string,
  selected: boolean,
};

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  readonly BASE_URI: string = '/main';

  menus: MenuItem[] = [{
    label: 'Default',
    rootUri: '/default',
    selected: true,
  }, {
    label: 'Global Inventory',
    rootUri: '/global-inventory',
    selected: false,
  }, {
    label: 'Non Collected Assets',
    rootUri: '',
    selected: false,
  }, {
    label: 'List History',
    rootUri: '',
    selected: false,
  }, {
    label: 'OS Metrics',
    rootUri: '',
    selected: false,
  }, {
    label: 'Oracle Database',
    rootUri: '',
    selected: false,
  }, {
    label: 'Storage Reports',
    rootUri: '',
    selected: false,
  }, {
    label: 'BROD Reports',
    rootUri: '',
    selected: false,
  }, {
    label: 'Rvtools Reports',
    rootUri: '',
    selected: false,
  }, {
    label: 'HmcScanner Reports',
    rootUri: '',
    selected: false,
  }];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onMenuItemClick(event: MouseEvent): void {
    const clickedLabel: string = (event.target as HTMLElement).innerText;
    if (clickedLabel) {
      this.tickMenuItem(clickedLabel, true);
    }
  }

  tickMenuItem(label: string, goto: boolean = false): void {
    const selectedItem: MenuItem | undefined = this.menus.find((item: MenuItem) => item.selected);
    if (selectedItem) {
      selectedItem.selected = false;
    }

    const newSelectedItem: MenuItem | undefined = this.menus.find((item: MenuItem) => item.label === label);
    if (newSelectedItem) {
      newSelectedItem.selected = true;
      if (goto) {
        console.log('redirecting to: ', `${this.BASE_URI}${newSelectedItem.rootUri}`)
        this.router.navigate([`${this.BASE_URI}${newSelectedItem.rootUri}`]);
      }
    }
  }
}
