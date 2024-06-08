class DoublyListNode<T> {
    value: T;
    next: DoublyListNode<T> | null;
    prev: DoublyListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList<T> {
    head: DoublyListNode<T> | null;
    tail: DoublyListNode<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value: T): void {
        const newNode = new DoublyListNode(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
    }

    prepend(value: T): void {
        const newNode = new DoublyListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length += 1;
    }

    removeHead(): T | null {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.length -= 1;
        return value;
    }

    removeTail(): T | null {
        if (!this.tail) return null;
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length -= 1;
        return value;
    }

    print(): void {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

class Stack<T> {
    private list: DoublyLinkedList<T>;

    constructor() {
        this.list = new DoublyLinkedList<T>();
    }

    push(value: T): void {
        this.list.prepend(value);
    }

    pop(): T | null {
        return this.list.removeHead();
    }

    isEmpty(): boolean {
        return this.list.length === 0;
    }

    print(): void {
        this.list.print();
    }
}

class Queue<T> {
    private list: DoublyLinkedList<T>;

    constructor() {
        this.list = new DoublyLinkedList<T>();
    }

    push(value: T): void {
        this.list.append(value);
    }

    pop(): T | null {
        return this.list.removeHead();
    }

    isEmpty(): boolean {
        return this.list.length === 0;
    }

    print(): void {
        this.list.print();
    }
}


// Crear una instancia de DoublyLinkedList
const list = new DoublyLinkedList<number>();

// Añadir elementos al final de la lista
list.append(10);
list.append(20);
list.append(30);

console.log("Lista desde el comienzo:");
list.print();

// Añadir elementos al principio de la lista
list.prepend(5);
console.log("Lista después de añadir al principio:");
list.print(); 

// Eliminar el primer elemento de la lista
const removedHead = list.removeHead();
console.log("Elemento eliminado del comienzo:", removedHead); 
console.log("Lista después de eliminar el primer elemento:");
list.print();

// Eliminar el último elemento de la lista
const removedTail = list.removeTail();
console.log("Elemento eliminado del final:", removedTail);
console.log("Lista después de eliminar el último elemento:");
list.print(); 

// Uso de Stack
console.log('Stack use')
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Pila o Stack desde el comienzo:");
stack.print();

console.log("Elemento 1 pop o eliminado de Stack:", stack.pop()); 
console.log("Elemento 2 pop o eliminado de Stack:", stack.pop()); 
console.log("Stack después de pop:");
stack.print();

// Uso de Queue
console.log('Queue use')
const queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
console.log("Queue o cola desde el comienzo:");
queue.print(); 

console.log("Elemento pop o eliminado de Queue:", queue.pop());
console.log("Elemento pop o eliminado de Queue:", queue.pop());
console.log("Queue después de pop:");
queue.print();