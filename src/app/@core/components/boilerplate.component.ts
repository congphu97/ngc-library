import { Subject } from 'rxjs';

export class BoilerplateComponent {

	protected destroyed$: Subject<void> = new Subject<void>();

}
