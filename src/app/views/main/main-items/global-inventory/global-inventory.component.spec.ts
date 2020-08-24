import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInventoryComponent } from './default.component';

describe('DefauultComponent', () => {
  let component: GlobalInventoryComponent;
  let fixture: ComponentFixture<GlobalInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
