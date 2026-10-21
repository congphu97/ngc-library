import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
const REACTION_EMOJI_MAP = {
    like: '👍',
    heart: '❤️',
    haha: '😂',
    wow: '😮',
    sad: '😢',
    angry: '😡',
};
export class NgcReactionEmojiPipe {
    transform(reactions, type) {
        const found = reactions?.find(r => r.type === type);
        return found?.emoji || REACTION_EMOJI_MAP[type] || '👍';
    }
}
NgcReactionEmojiPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcReactionEmojiPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NgcReactionEmojiPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgcReactionEmojiPipe, name: "reactionEmoji" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgcReactionEmojiPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'reactionEmoji' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Rpb24tZW1vamkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYy1saWJyYXJ5L3NyYy9saWIvbmdjLWNvbW1lbnQvcGlwZXMvcmVhY3Rpb24tZW1vamkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxrQkFBa0IsR0FBNEM7SUFDbkUsSUFBSSxFQUFJLElBQUk7SUFDWixLQUFLLEVBQUcsSUFBSTtJQUNaLElBQUksRUFBSSxJQUFJO0lBQ1osR0FBRyxFQUFLLElBQUk7SUFDWixHQUFHLEVBQUssSUFBSTtJQUNaLEtBQUssRUFBRyxJQUFJO0NBQ1osQ0FBQztBQUdGLE1BQU0sT0FBTyxvQkFBb0I7SUFFaEMsU0FBUyxDQUFFLFNBQTZELEVBQUUsSUFBNkI7UUFDdEcsTUFBTSxLQUFLLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFFLENBQUM7UUFDdEQsT0FBTyxLQUFLLEVBQUUsS0FBSyxJQUFJLGtCQUFrQixDQUFFLElBQUksQ0FBRSxJQUFJLElBQUksQ0FBQztJQUMzRCxDQUFDOztpSEFMVyxvQkFBb0I7K0dBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQURoQyxJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nY0lDb21tZW50UmVhY3Rpb25UeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmNvbnN0IFJFQUNUSU9OX0VNT0pJX01BUDogUmVjb3JkPE5nY0lDb21tZW50UmVhY3Rpb25UeXBlLCBzdHJpbmc+ID0ge1xuXHRsaWtlICA6ICfwn5GNJyxcblx0aGVhcnQgOiAn4p2k77iPJyxcblx0aGFoYSAgOiAn8J+YgicsXG5cdHdvdyAgIDogJ/CfmK4nLFxuXHRzYWQgICA6ICfwn5iiJyxcblx0YW5ncnkgOiAn8J+YoScsXG59O1xuXG5AUGlwZSh7IG5hbWU6ICdyZWFjdGlvbkVtb2ppJyB9KVxuZXhwb3J0IGNsYXNzIE5nY1JlYWN0aW9uRW1vamlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0dHJhbnNmb3JtKCByZWFjdGlvbnM6IHsgdHlwZTogTmdjSUNvbW1lbnRSZWFjdGlvblR5cGU7IGVtb2ppOiBzdHJpbmcgfVtdLCB0eXBlOiBOZ2NJQ29tbWVudFJlYWN0aW9uVHlwZSApOiBzdHJpbmcge1xuXHRcdGNvbnN0IGZvdW5kID0gcmVhY3Rpb25zPy5maW5kKCByID0+IHIudHlwZSA9PT0gdHlwZSApO1xuXHRcdHJldHVybiBmb3VuZD8uZW1vamkgfHwgUkVBQ1RJT05fRU1PSklfTUFQWyB0eXBlIF0gfHwgJ/CfkY0nO1xuXHR9XG5cbn1cbiJdfQ==