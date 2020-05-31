import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JaxaClimatePage } from './jaxa-climate.page';

describe('JaxaClimatePage', () => {
	let component: JaxaClimatePage;
	let fixture: ComponentFixture<JaxaClimatePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [JaxaClimatePage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(JaxaClimatePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
