import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NasaCloudsPage } from './nasa-clouds.page';

describe('NasaCloudsPage', () => {
	let component: NasaCloudsPage;
	let fixture: ComponentFixture<NasaCloudsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NasaCloudsPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(NasaCloudsPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
