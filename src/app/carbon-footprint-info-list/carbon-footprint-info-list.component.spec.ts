import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintInfoListComponent } from './carbon-footprint-info-list.component';

describe('CarbonFootprintInfoListComponent', () => {
  let component: CarbonFootprintInfoListComponent;
  let fixture: ComponentFixture<CarbonFootprintInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonFootprintInfoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonFootprintInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
