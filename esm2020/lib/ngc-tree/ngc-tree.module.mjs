import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgcCheckboxModule } from '../ngc-checkbox/ngc-checkbox.module';
import { NgcIconModule } from '../ngc-icon/ngc-icon.module';
import { NgcTreeComponent } from './ngc-tree.component';
import { NgcTreeNodeComponent } from './ngc-tree-node.component';
import * as i0 from "@angular/core";
export class NgcTreeModule {
}
NgcTreeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcTreeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeModule, declarations: [NgcTreeComponent,
        NgcTreeNodeComponent], imports: [CommonModule,
        FormsModule,
        NgcCheckboxModule,
        NgcIconModule], exports: [NgcTreeComponent,
        NgcTreeNodeComponent] });
NgcTreeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeModule, imports: [CommonModule,
        FormsModule,
        NgcCheckboxModule,
        NgcIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcTreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcTreeComponent,
                        NgcTreeNodeComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        NgcCheckboxModule,
                        NgcIconModule,
                    ],
                    exports: [
                        NgcTreeComponent,
                        NgcTreeNodeComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLXRyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtdHJlZS9uZ2MtdHJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFrQmpFLE1BQU0sT0FBTyxhQUFhOzswR0FBYixhQUFhOzJHQUFiLGFBQWEsaUJBZHhCLGdCQUFnQjtRQUNoQixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsYUFBYSxhQUdiLGdCQUFnQjtRQUNoQixvQkFBb0I7MkdBR1QsYUFBYSxZQVZ4QixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixhQUFhOzJGQU9GLGFBQWE7a0JBaEJ6QixRQUFRO21CQUFDO29CQUNULFlBQVksRUFBRTt3QkFDYixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGFBQWE7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3FCQUNwQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2NDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL25nYy1jaGVja2JveC9uZ2MtY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICcuLi9uZ2MtaWNvbi9uZ2MtaWNvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2NUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdjVHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL25nYy10cmVlLW5vZGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TmdjVHJlZUNvbXBvbmVudCxcblx0XHROZ2NUcmVlTm9kZUNvbXBvbmVudCxcblx0XSxcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHROZ2NDaGVja2JveE1vZHVsZSxcblx0XHROZ2NJY29uTW9kdWxlLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0TmdjVHJlZUNvbXBvbmVudCxcblx0XHROZ2NUcmVlTm9kZUNvbXBvbmVudCxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOZ2NUcmVlTW9kdWxlIHsgfVxuIl19