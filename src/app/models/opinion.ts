export class Opinion {
    uid: number;
    parentUid: number;
    topic: string;
    poster: string;
    comment: string;
    children: Opinion[];
}
