import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let comments = [
            {
                uid: 1,
                topic: 'Test topic',
                poster: 'op',
                comment: 'This is a test comment',
                children: [
                    {
                        uid: 2,
                        topic: 'Test topic',
                        parentUid: 1,
                        poster: 'diffOp',
                        comment: 'Response to original comment',
                        children: [
                            {
                                uid: 4,
                                topic: 'Test topic',
                                parentUid: 2,
                                poster: 'diffOp4',
                                comment: 'Nested Comment'
                            }
                        ]
                    },
                    {
                        uid: 3,
                        topic: 'Test topic',
                        parentUid: 1,
                        poster: 'diffOp2',
                        comment: 'Next response to original comment'
                    }
                ]
            },
            {
                uid: 5,
                topic: 'Test topic',
                poster: 'diffOp3',
                comment: 'New Comment'
            }
        ];
        return {comments};
    }
}
