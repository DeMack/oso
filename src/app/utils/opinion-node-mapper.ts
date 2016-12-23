import {Opinion} from '../models/opinion';
import {OsoTreeNode} from '../models/oso-tree-node';

export class OpinionNodeMapper {

    public static mapOpinionToTreeNode(opinion: Opinion, parentNode?: OsoTreeNode): OsoTreeNode {
        let toReturn = new OsoTreeNode();

        toReturn.parent = (parentNode) ? parentNode : null;
        toReturn.details = [
            {property: 'poster', value: opinion.poster},
            {property: 'comment', value: opinion.comment},
            {property: 'uid', value: opinion.uid}
        ];

        if (opinion.children) {
            toReturn.children = [];
            for (let child of opinion.children) {
                toReturn.children.push(this.mapOpinionToTreeNode(child, toReturn));
            }
        }

        return toReturn;
    }
}
