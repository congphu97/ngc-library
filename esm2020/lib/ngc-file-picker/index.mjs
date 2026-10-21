export * from './google-drive/ngc-google-drive-picker.directive';
export * from './dropbox/ngc-dropbox-picker.directive';
export * from './one-drive/ngc-one-drive-picker.directive';
export * from './ngc-file-picker.component';
export * from './ngc-file-picker.directive';
export * from './ngc-file-picker.module';
export function openFile(file) {
    let cannotOpen;
    switch (file.attachmentType) {
        case 'google-drive':
            openNewWindow(file.url);
            break;
        case 'dropbox':
            openNewWindow(file.link);
            break;
        case 'one-drive':
            openNewWindow(file['@microsoft.graph.downloadUrl']);
            break;
        default:
            cannotOpen = true;
    }
    return !cannotOpen;
}
export function openNewWindow(url) {
    const win = window.open(url, '_blank');
    win?.focus();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2MtbGlicmFyeS9zcmMvbGliL25nYy1maWxlLXBpY2tlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxjQUFjLGtEQUFrRCxDQUFDO0FBQ2pFLGNBQWMsd0NBQXdDLENBQUM7QUFDdkQsY0FBYyw0Q0FBNEMsQ0FBQztBQUMzRCxjQUFjLDZCQUE2QixDQUFDO0FBQzVDLGNBQWMsNkJBQTZCLENBQUM7QUFDNUMsY0FBYywwQkFBMEIsQ0FBQztBQUV6QyxNQUFNLFVBQVUsUUFBUSxDQUFFLElBQWM7SUFDdkMsSUFBSSxVQUFtQixDQUFDO0lBRXhCLFFBQVMsSUFBSSxDQUFDLGNBQWMsRUFBRztRQUM5QixLQUFLLGNBQWM7WUFDbEIsYUFBYSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQztZQUMxQixNQUFNO1FBQ1AsS0FBSyxTQUFTO1lBQ2IsYUFBYSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztZQUMzQixNQUFNO1FBQ1AsS0FBSyxXQUFXO1lBQ2YsYUFBYSxDQUFFLElBQUksQ0FBRSw4QkFBOEIsQ0FBRSxDQUFFLENBQUM7WUFDeEQsTUFBTTtRQUNQO1lBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQztLQUNuQjtJQUVELE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUUsR0FBVztJQUN6QyxNQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSxRQUFRLENBQUUsQ0FBQztJQUVqRCxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdjSUZpbGUgfSBmcm9tICcuL25nYy1maWxlLXBpY2tlci5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2dvb2dsZS1kcml2ZS9uZ2MtZ29vZ2xlLWRyaXZlLXBpY2tlci5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kcm9wYm94L25nYy1kcm9wYm94LXBpY2tlci5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vbmUtZHJpdmUvbmdjLW9uZS1kcml2ZS1waWNrZXIuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbmdjLWZpbGUtcGlja2VyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL25nYy1maWxlLXBpY2tlci5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9uZ2MtZmlsZS1waWNrZXIubW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5GaWxlKCBmaWxlOiBOZ2NJRmlsZSApOiBib29sZWFuIHtcblx0bGV0IGNhbm5vdE9wZW46IGJvb2xlYW47XG5cblx0c3dpdGNoICggZmlsZS5hdHRhY2htZW50VHlwZSApIHtcblx0XHRjYXNlICdnb29nbGUtZHJpdmUnOlxuXHRcdFx0b3Blbk5ld1dpbmRvdyggZmlsZS51cmwgKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2Ryb3Bib3gnOlxuXHRcdFx0b3Blbk5ld1dpbmRvdyggZmlsZS5saW5rICk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdvbmUtZHJpdmUnOlxuXHRcdFx0b3Blbk5ld1dpbmRvdyggZmlsZVsgJ0BtaWNyb3NvZnQuZ3JhcGguZG93bmxvYWRVcmwnIF0gKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjYW5ub3RPcGVuID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiAhY2Fubm90T3Blbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5OZXdXaW5kb3coIHVybDogc3RyaW5nICkge1xuXHRjb25zdCB3aW46IFdpbmRvdyA9IHdpbmRvdy5vcGVuKCB1cmwsICdfYmxhbmsnICk7XG5cblx0d2luPy5mb2N1cygpO1xufVxuIl19