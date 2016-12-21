import {Component} from '@angular/core';

import {Opinion} from 'models/opinion';

@Component({
    moduleId: module.id,
    selector: 'oso-comment',
    templateUrl: '../../html/comment.component.html'
})
export class CommentComponent {
    comment: Opinion = {
        uid: 1,
        parentUid: null,
        poster: 'tester',
        comment: 'This is a test'
    };

}
