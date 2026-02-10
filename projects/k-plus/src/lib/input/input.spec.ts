import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { KPlusInput } from './input';

@Component({
  standalone: true,
  imports: [FormsModule, KPlusInput],
  template: `<kplus-input [(ngModel)]="value" />`,
})
class Host {
  value = 'hello';
}

describe('KPlusInput', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [KPlusInput],
    }).compileComponents();

    const fixture = TestBed.createComponent(KPlusInput);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should integrate with ngModel (CVA)', async () => {
    await TestBed.configureTestingModule({
      imports: [Host],
    }).compileComponents();

    const fixture: ComponentFixture<Host> = TestBed.createComponent(Host);
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('hello');

    input.value = 'changed';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.componentInstance.value).toBe('changed');
  });
});
