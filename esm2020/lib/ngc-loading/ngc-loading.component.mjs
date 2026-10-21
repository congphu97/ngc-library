import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { CoerceNumber, CoerceBoolean, DefaultValue } from '@core';
import { COLOR } from '@resources';
import * as i0 from "@angular/core";
import * as i1 from "angular-svg-round-progressbar";
export class NgcLoadingComponent {
    constructor() {
        this.color = COLOR.INFO;
        this.backgroundColor = COLOR.BORDER;
        this.size = 10;
    }
}
NgcLoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcLoadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgcLoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: NgcLoadingComponent, selector: "ngc-loading", inputs: { color: "color", backgroundColor: "backgroundColor", size: "size", fullPage: "fullPage" }, host: { properties: { "class.ngc-loading--full-page": "fullPage" }, classAttribute: "ngc-loading" }, ngImport: i0, template: "<div class=\"ngc-loading__spinner\">\n\t<round-progress [max]=\"100\"\n\t\t[current]=\"25\"\n\t\t[stroke]=\"size / 5\"\n\t\t[radius]=\"size\"\n\t\t[color]=\"color\"\n\t\t[background]=\"backgroundColor\"></round-progress>\n</div>", styles: [".ngc-loading{display:inline-flex;width:fit-content}.ngc-loading__spinner{display:flex;animation:2s linear infinite spin}.ngc-loading--full-page{position:fixed;inset:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background-color:#0f172a73;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:9999}\n"], dependencies: [{ kind: "component", type: i1.RoundProgressComponent, selector: "round-progress", inputs: ["current", "max", "radius", "animation", "animationDelay", "duration", "stroke", "color", "background", "responsive", "clockwise", "semicircle", "rounded"], outputs: ["onRender"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcLoadingComponent.prototype, "color", void 0);
__decorate([
    DefaultValue(),
    __metadata("design:type", String)
], NgcLoadingComponent.prototype, "backgroundColor", void 0);
__decorate([
    DefaultValue(),
    CoerceNumber(),
    __metadata("design:type", Number)
], NgcLoadingComponent.prototype, "size", void 0);
__decorate([
    CoerceBoolean(),
    __metadata("design:type", Boolean)
], NgcLoadingComponent.prototype, "fullPage", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcLoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngc-loading', host: {
                        class: 'ngc-loading',
                        '[class.ngc-loading--full-page]': 'fullPage'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngc-loading__spinner\">\n\t<round-progress [max]=\"100\"\n\t\t[current]=\"25\"\n\t\t[stroke]=\"size / 5\"\n\t\t[radius]=\"size\"\n\t\t[color]=\"color\"\n\t\t[background]=\"backgroundColor\"></round-progress>\n</div>", styles: [".ngc-loading{display:inline-flex;width:fit-content}.ngc-loading__spinner{display:flex;animation:2s linear infinite spin}.ngc-loading--full-page{position:fixed;inset:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background-color:#0f172a73;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:9999}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], size: [{
                type: Input
            }], fullPage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjLWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9uZ2MtbG9hZGluZy9uZ2MtbG9hZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1sb2FkaW5nL25nYy1sb2FkaW5nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFhbkMsTUFBTSxPQUFPLG1CQUFtQjtJQVhoQztRQWFpQyxVQUFLLEdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUMzQixvQkFBZSxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztLQUdsRTs7Z0hBUFksbUJBQW1CO29HQUFuQixtQkFBbUIsNFBDaEJoQyxzT0FPTTtBRFdMO0lBQVUsWUFBWSxFQUFFOztrREFBbUM7QUFDM0Q7SUFBVSxZQUFZLEVBQUU7OzREQUErQztBQUN2RTtJQUFVLFlBQVksRUFBRTtJQUFFLFlBQVksRUFBRTs7aURBQTBCO0FBQ2xFO0lBQVUsYUFBYSxFQUFFOztxREFBMEI7MkZBTHZDLG1CQUFtQjtrQkFYL0IsU0FBUzsrQkFDRyxhQUFhLFFBR2hCO3dCQUNSLEtBQUssRUFBRSxhQUFhO3dCQUNwQixnQ0FBZ0MsRUFBRSxVQUFVO3FCQUM1QyxpQkFDZSxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUloQixLQUFLO3NCQUFwQyxLQUFLO2dCQUMwQixlQUFlO3NCQUE5QyxLQUFLO2dCQUMwQyxJQUFJO3NCQUFuRCxLQUFLO2dCQUMyQixRQUFRO3NCQUF4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvZXJjZU51bWJlciwgQ29lcmNlQm9vbGVhbiwgRGVmYXVsdFZhbHVlIH0gZnJvbSAnQGNvcmUnO1xuaW1wb3J0IHsgQ09MT1IgfSBmcm9tICdAcmVzb3VyY2VzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yXHRcdDogJ25nYy1sb2FkaW5nJyxcblx0dGVtcGxhdGVVcmxcdFx0OiAnLi9uZ2MtbG9hZGluZy5odG1sJyxcblx0c3R5bGVVcmxzXHRcdDogWyAnLi9uZ2MtbG9hZGluZy5zY3NzJyBdLFxuXHRob3N0XHRcdFx0OiB7XG5cdFx0Y2xhc3M6ICduZ2MtbG9hZGluZycsXG5cdFx0J1tjbGFzcy5uZ2MtbG9hZGluZy0tZnVsbC1wYWdlXSc6ICdmdWxsUGFnZSdcblx0fSxcblx0ZW5jYXBzdWxhdGlvblx0OiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb25cdDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2NMb2FkaW5nQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBDT0xPUi5JTkZPO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgcHVibGljIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gQ09MT1IuQk9SREVSO1xuXHRASW5wdXQoKSBARGVmYXVsdFZhbHVlKCkgQENvZXJjZU51bWJlcigpIHB1YmxpYyBzaXplOiBudW1iZXIgPSAxMDtcblx0QElucHV0KCkgQENvZXJjZUJvb2xlYW4oKSBwdWJsaWMgZnVsbFBhZ2U6IGJvb2xlYW47XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ2MtbG9hZGluZ19fc3Bpbm5lclwiPlxuXHQ8cm91bmQtcHJvZ3Jlc3MgW21heF09XCIxMDBcIlxuXHRcdFtjdXJyZW50XT1cIjI1XCJcblx0XHRbc3Ryb2tlXT1cInNpemUgLyA1XCJcblx0XHRbcmFkaXVzXT1cInNpemVcIlxuXHRcdFtjb2xvcl09XCJjb2xvclwiXG5cdFx0W2JhY2tncm91bmRdPVwiYmFja2dyb3VuZENvbG9yXCI+PC9yb3VuZC1wcm9ncmVzcz5cbjwvZGl2PiJdfQ==