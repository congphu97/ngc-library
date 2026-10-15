# Hướng Dẫn & Lịch Sử Đóng Gói `ngc-library` Thành Angular Library

Tài liệu này ghi lại toàn bộ quy trình và các bước kỹ thuật đã thực hiện để chuyển đổi các UI component từ dạng Angular Application thành một **Angular Library** hoàn chỉnh, có thể đóng gói và tái sử dụng cho các dự án khác.

---

## 1. Khởi Tạo Cấu Trúc Library

1. **Cài đặt công cụ đóng gói:**
   - Cài đặt `ng-packagr` phiên bản tương thích với Angular 14:
     ```bash
     npm i -D ng-packagr@^14.2.0 --force
     ```
2. **Khởi tạo thư viện bằng Angular CLI:**
   - Khởi tạo thư mục thư viện tại `projects/ngc-library`:
     ```bash
     ng generate library ngc-library
     ```
3. **Di chuyển mã nguồn vào Library:**
   - Di chuyển toàn bộ các component, directive, pipe từ:
     - `src/app/@ngc/*`
     - `src/app/@core/*`
     - `src/app/@resources/*`
     - `src/scss/*`
   - Đưa vào thư mục: `projects/ngc-library/src/lib/`.

---

## 2. Cấu Hình Đóng Gói (ng-packagr & TypeScript)

1. **Cấu hình `projects/ngc-library/ng-package.json`:**
   - Khai báo file entry point chính `src/public-api.ts`.
   - Cấu hình `styleIncludePaths` trỏ tới `./src/lib/scss` và `./src/lib/scss/partials` để các file SCSS component có thể `@import 'variable';` hoặc `@import 'mixin';`.
   - Thêm assets SCSS vào bundle phân phối:
     ```json
     {
       "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
       "dest": "../../dist/ngc-library",
       "lib": {
         "entryFile": "src/public-api.ts",
         "styleIncludePaths": [
           "./src/lib/scss",
           "./src/lib/scss/partials",
           "../../node_modules"
         ]
       },
       "assets": [
         "./src/lib/scss"
       ]
     }
     ```

2. **Cấu hình `projects/ngc-library/tsconfig.lib.json` & `tsconfig.lib.prod.json`:**
   - Khai báo đường dẫn aliases nội bộ (`@core`, `@resources`, `@app/@core`, `@ngc/*`) trỏ về `src/lib`.
   - Cấu hình compiler options relaxed để tương thích với template dynamic:
     ```json
     "angularCompilerOptions": {
       "enableIvy": true,
       "fullTemplateTypeCheck": false,
       "strictTemplates": false
     }
     ```

---

## 3. Tách Rời Phụ Thuộc Ứng Dụng (Decoupling)

1. **Xử lý `ENVIRONMENT`:**
   - Source gốc import trực tiếp từ file cấu hình của web app `@environments/environment`.
   - Tạo file `projects/ngc-library/src/lib/core/environment.ts` định nghĩa InjectionToken `NGC_ENVIRONMENT` và fallback `DEFAULT_ENVIRONMENT`.
   - Cập nhật các component/directive/pipe (`GoogleDrivePicker`, `OneDrivePicker`, `EnvironmentPipe`, `ChannelURLPipe`) import `ENVIRONMENT` từ `@core`.
2. **Dọn dẹp `CoreModule`:**
   - Chuyển các dependency cứng trong constructor `CoreModule` (`_serverConfig`, `_storageConfig`) thành optional hoặc cấu hình thông qua injection tokens.

---

## 4. Xử Lý Vòng Lặp Phụ Thuộc (Circular Dependencies)

Angular Ivy không cho phép các component import vòng tròn lẫn nhau. Đã xử lý 2 trường hợp chính:
1. **`ngc-calendar`:**
   - Tách toàn bộ interface và type (`NgcICalendarEvent`, `NgcICalendarPeriod`, `NgcICalendarWeekDay`,...) sang file độc lập: `projects/ngc-library/src/lib/ngc-calendar/calendar-types.ts`.
   - Cả `NgcCalendarComponent` và các view con (`day-view`, `week-view`, `month-view`) cùng import từ file types này.
2. **`ngc-tree`:**
   - `NgcTreeComponent` và `NgcTreeNodeComponent` phụ thuộc lẫn nhau.
   - Tạo class abstract `NgcTreeService` trong file `projects/ngc-library/src/lib/ngc-tree/tree-types.ts`.
   - `NgcTreeComponent` cung cấp service này qua `forwardRef(() => NgcTreeComponent)`, và `NgcTreeNodeComponent` chỉ inject `NgcTreeService`.

---

## 5. Chuẩn Hóa Type & Sửa Lỗi Template

1. **Type `IObject`:**
   - Định nghĩa `export type IObject<T = any> = Record<string, T>;` trong `projects/ngc-library/src/lib/core/interfaces/index.ts`.
   - Bổ sung import `IObject` vào tất cả các component cần dùng để trình biên dịch tạo file `.d.ts` không gặp lỗi private name.
2. **Sửa lỗi template bindings:**
   - **`ngc-design-token`:** Khai báo thêm thuộc tính `spacingOptions` và `spacingBase` trong `NgcDesignTokenComponent`.
   - **`ngc-list`:** Sửa binding `[reachBottomBuffer]` thành `[offset]` trên directive `detectScroll`.
   - **`ngc-list` & `ngc-member-list`:** Sửa cú pháp pipe `trackBy: trackByFn` thành `trackBy: 'id' | trackByFn`.
   - **`ngc-file-picker`:** Thêm thuộc tính `file: any;` trong component.
   - **`ngc-code-block`:** Re-export `NgcIconComponent` và sửa lại import vào `NgcCodeBlockModule`.

---

## 6. Xây Dựng Public API (`public-api.ts`)

Tạo file `projects/ngc-library/src/public-api.ts` xuất đầy đủ:
- Tất cả module UI (59+ module: `NgcButtonModule`, `NgcTableModule`, `NgcDialogModule`, `NgcDropdownModule`,...).
- Các component, directive, pipe, service, decorator, helper từ `core` và `resources`.

---

## 7. Hướng Dẫn Sử Dụng & Build

### Lệnh Build Thư Viện:
Đã bổ sung script vào `package.json` gốc:
```bash
npm run build:lib
```
*(Hoặc chạy trực tiếp: `npx ng build ngc-library`)*

### Kết Quả Build:
Thư viện được biên dịch và đóng gói tại:
```
dist/ngc-library/
├── esm2020/
├── fesm2015/
├── fesm2020/
├── index.d.ts
├── package.json
└── public-api.d.ts
```

### Sử Dụng Thư Viện:
- **Publish lên NPM:**
  ```bash
  cd dist/ngc-library
  npm publish
  ```
- **Sử dụng cho dự án khác (Local Link):**
  ```bash
  # Tại dự án cần dùng:
  npm i /path/to/ngc-library/dist/ngc-library
  ```
- **Import vào Angular Module của dự án khác:**
  ```typescript
  import { NgcButtonModule, NgcTableModule } from 'ngc-library';

  @NgModule({
    imports: [
      NgcButtonModule,
      NgcTableModule
    ]
  })
  export class AppModule { }
  ```
