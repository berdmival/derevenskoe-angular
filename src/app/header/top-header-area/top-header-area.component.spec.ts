import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderAreaComponent } from './top-header-area.component';

describe('TopHeaderAreaComponent', () => {
  let component: TopHeaderAreaComponent;
  let fixture: ComponentFixture<TopHeaderAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeaderAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
