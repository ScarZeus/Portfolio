import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmongusBackground } from './amongus-background';

describe('AmongusBackground', () => {
  let component: AmongusBackground;
  let fixture: ComponentFixture<AmongusBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmongusBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmongusBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
