export class OsoTreeNode {
    details: {property: string, value: any}[];
    children?: OsoTreeNode[];
    parent?: OsoTreeNode;
    expanded: boolean;
}
