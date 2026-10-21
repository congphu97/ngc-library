import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgcAvatarModule } from '@app/@ngc/ngc-avatar';
import { NgcIconModule } from '@app/@ngc/ngc-icon';
import { NgcMenuModule } from '@app/@ngc/ngc-menu';
import { NgcTooltipModule } from '@app/@ngc/ngc-tooltip';
import { NgcEmojiPickerModule } from '@app/@ngc/ngc-emoji-picker';
import { NgcFilePickerModule } from '@app/@ngc/ngc-file-picker';
import { NgcCommentBoxComponent } from './ngc-comment-box/ngc-comment-box.component';
import { NgcCommentListComponent } from './ngc-comment-list/ngc-comment-list.component';
import { NgcReactionEmojiPipe } from './pipes/reaction-emoji.pipe';
import * as i0 from "@angular/core";
export class NgcCommentModule {
}
NgcCommentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCommentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgcCommentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcCommentModule, declarations: [NgcCommentBoxComponent,
        NgcCommentListComponent,
        NgcReactionEmojiPipe], imports: [CommonModule,
        FormsModule,
        NgcAvatarModule,
        NgcIconModule,
        NgcMenuModule,
        NgcTooltipModule,
        NgcEmojiPickerModule,
        NgcFilePickerModule], exports: [NgcCommentBoxComponent,
        NgcCommentListComponent] });
NgcCommentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCommentModule, imports: [CommonModule,
        FormsModule,
        NgcAvatarModule,
        NgcIconModule,
        NgcMenuModule,
        NgcTooltipModule,
        NgcEmojiPickerModule,
        NgcFilePickerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcCommentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgcCommentBoxComponent,
                        NgcCommentListComponent,
                        NgcReactionEmojiPipe,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        NgcAvatarModule,
                        NgcIconModule,
                        NgcMenuModule,
                        NgcTooltipModule,
                        NgcEmojiPickerModule,
                        NgcFilePickerModule,
                    ],
                    exports: [
                        NgcCommentBoxComponent,
                        NgcCommentListComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWNvbW1lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtY29tbWVudC9uZ2MtY29tbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQXVCbkUsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQW5CM0Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLG1CQUFtQixhQUduQixzQkFBc0I7UUFDdEIsdUJBQXVCOzhHQUdaLGdCQUFnQixZQWQzQixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsbUJBQW1COzJGQU9SLGdCQUFnQjtrQkFyQjVCLFFBQVE7bUJBQUM7b0JBQ1QsWUFBWSxFQUFFO3dCQUNiLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixvQkFBb0I7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3FCQUN2QjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nY0F2YXRhck1vZHVsZSB9IGZyb20gJ0BhcHAvQG5nYy9uZ2MtYXZhdGFyJztcbmltcG9ydCB7IE5nY0ljb25Nb2R1bGUgfSBmcm9tICdAYXBwL0BuZ2MvbmdjLWljb24nO1xuaW1wb3J0IHsgTmdjTWVudU1vZHVsZSB9IGZyb20gJ0BhcHAvQG5nYy9uZ2MtbWVudSc7XG5pbXBvcnQgeyBOZ2NUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFwcC9AbmdjL25nYy10b29sdGlwJztcbmltcG9ydCB7IE5nY0Vtb2ppUGlja2VyTW9kdWxlIH0gZnJvbSAnQGFwcC9AbmdjL25nYy1lbW9qaS1waWNrZXInO1xuaW1wb3J0IHsgTmdjRmlsZVBpY2tlck1vZHVsZSB9IGZyb20gJ0BhcHAvQG5nYy9uZ2MtZmlsZS1waWNrZXInO1xuXG5pbXBvcnQgeyBOZ2NDb21tZW50Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9uZ2MtY29tbWVudC1ib3gvbmdjLWNvbW1lbnQtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NDb21tZW50TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbmdjLWNvbW1lbnQtbGlzdC9uZ2MtY29tbWVudC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2NSZWFjdGlvbkVtb2ppUGlwZSB9IGZyb20gJy4vcGlwZXMvcmVhY3Rpb24tZW1vamkucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE5nY0NvbW1lbnRCb3hDb21wb25lbnQsXG5cdFx0TmdjQ29tbWVudExpc3RDb21wb25lbnQsXG5cdFx0TmdjUmVhY3Rpb25FbW9qaVBpcGUsXG5cdF0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0TmdjQXZhdGFyTW9kdWxlLFxuXHRcdE5nY0ljb25Nb2R1bGUsXG5cdFx0TmdjTWVudU1vZHVsZSxcblx0XHROZ2NUb29sdGlwTW9kdWxlLFxuXHRcdE5nY0Vtb2ppUGlja2VyTW9kdWxlLFxuXHRcdE5nY0ZpbGVQaWNrZXJNb2R1bGUsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHROZ2NDb21tZW50Qm94Q29tcG9uZW50LFxuXHRcdE5nY0NvbW1lbnRMaXN0Q29tcG9uZW50LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5nY0NvbW1lbnRNb2R1bGUgeyB9XG4iXX0=