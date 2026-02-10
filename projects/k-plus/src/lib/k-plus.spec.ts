import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPlus } from './k-plus';

describe('KPlus', () => {
  let component: KPlus;
  let fixture: ComponentFixture<KPlus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KPlus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KPlus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
