# Simple Singly Linked List in TypeScript

This TypeScript code implements a simple singly linked list (SLL) with basic operations such as inserting at the beginning and deleting the last node.

## Node Class

The `node` class represents a node in the linked list with a numerical value (`val`) and a reference to the next node (`next`).

```typescript
class node {
    public val: number;
    public next: node;

    public constructor(num: number) {
        this.val = num;
    }
}
