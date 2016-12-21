import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let comments = [
            {uid: 1, poster: 'op', comment: 'This is a test comment'},
            {uid: 2, parentUid: 1, poster: 'diffOp', comment: 'Response to original comment'},
            {uid: 3, parentUid: 1, poster: 'diffOp2', comment: 'Next response to original comment'},
            {uid: 4, parentUid: 2, poster: 'diffOp3', comment: 'Nested Comment'},
            {uid: 5, poster: 'diffOp3', comment: 'New Comment'}
        ];
        return {comments};
    }
}
