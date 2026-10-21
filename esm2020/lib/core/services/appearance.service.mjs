import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AppearanceService {
    /**
     * @param {string} primaryColor
     * @return {void}
     */
    setPrimaryColor(primaryColor = null) {
        // Remove old metas
        document.head
            .querySelectorAll('meta[name="theme-color"]')
            .forEach((meta) => meta.remove());
        // Create new metas
        const lightMeta = document.createElement('meta');
        const darkMeta = document.createElement('meta');
        lightMeta.name = darkMeta.name = 'theme-color';
        lightMeta.content = darkMeta.content = primaryColor;
        lightMeta.media = '(prefers-color-scheme: light)';
        darkMeta.media = '(prefers-color-scheme: dark)';
        // Append metas
        document.head.appendChild(lightMeta);
        document.head.appendChild(darkMeta);
        // Set variable style
        document.body.style.setProperty('--primary-color', primaryColor);
    }
}
AppearanceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppearanceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AppearanceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppearanceService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppearanceService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZWFyYW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdjLWxpYnJhcnkvc3JjL2xpYi9jb3JlL3NlcnZpY2VzL2FwcGVhcmFuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8saUJBQWlCO0lBRTdCOzs7T0FHRztJQUNJLGVBQWUsQ0FBRSxlQUF1QixJQUFJO1FBQ2xELG1CQUFtQjtRQUNuQixRQUFRLENBQUMsSUFBSTthQUNaLGdCQUFnQixDQUFFLDBCQUEwQixDQUFFO2FBQzlDLE9BQU8sQ0FBRSxDQUFFLElBQXFCLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBRSxDQUFDO1FBRXZELG1CQUFtQjtRQUNuQixNQUFNLFNBQVMsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUNwRSxNQUFNLFFBQVEsR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUVuRSxTQUFTLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDbEQsU0FBa0IsQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7UUFDM0QsUUFBaUIsQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUM7UUFFM0QsZUFBZTtRQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLFNBQVMsQ0FBRSxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLFFBQVEsQ0FBRSxDQUFDO1FBRXRDLHFCQUFxQjtRQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUUsaUJBQWlCLEVBQUUsWUFBWSxDQUFFLENBQUM7SUFDcEUsQ0FBQzs7OEdBM0JXLGlCQUFpQjtrSEFBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBlYXJhbmNlU2VydmljZSB7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmltYXJ5Q29sb3Jcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHB1YmxpYyBzZXRQcmltYXJ5Q29sb3IoIHByaW1hcnlDb2xvcjogc3RyaW5nID0gbnVsbCApIHtcblx0XHQvLyBSZW1vdmUgb2xkIG1ldGFzXG5cdFx0ZG9jdW1lbnQuaGVhZFxuXHRcdC5xdWVyeVNlbGVjdG9yQWxsKCAnbWV0YVtuYW1lPVwidGhlbWUtY29sb3JcIl0nIClcblx0XHQuZm9yRWFjaCggKCBtZXRhOiBIVE1MTWV0YUVsZW1lbnQgKSA9PiBtZXRhLnJlbW92ZSgpICk7XG5cblx0XHQvLyBDcmVhdGUgbmV3IG1ldGFzXG5cdFx0Y29uc3QgbGlnaHRNZXRhOiBIVE1MTWV0YUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbWV0YScgKTtcblx0XHRjb25zdCBkYXJrTWV0YTogSFRNTE1ldGFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ21ldGEnICk7XG5cblx0XHRsaWdodE1ldGEubmFtZSA9IGRhcmtNZXRhLm5hbWUgPSAndGhlbWUtY29sb3InO1xuXHRcdGxpZ2h0TWV0YS5jb250ZW50ID0gZGFya01ldGEuY29udGVudCA9IHByaW1hcnlDb2xvcjtcblx0XHQoIGxpZ2h0TWV0YSBhcyBhbnkgKS5tZWRpYSA9ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSc7XG5cdFx0KCBkYXJrTWV0YSBhcyBhbnkgKS5tZWRpYSA9ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJztcblxuXHRcdC8vIEFwcGVuZCBtZXRhc1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIGxpZ2h0TWV0YSApO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIGRhcmtNZXRhICk7XG5cblx0XHQvLyBTZXQgdmFyaWFibGUgc3R5bGVcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCAnLS1wcmltYXJ5LWNvbG9yJywgcHJpbWFyeUNvbG9yICk7XG5cdH1cblxufVxuIl19