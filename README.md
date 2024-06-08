````markdown
# 🌟 Estructuras de Datos con Nodos en TypeScript

¡Bienvenido a nuestro proyecto! Este repositorio contiene implementaciones de estructuras de datos fundamentales utilizando nodos en TypeScript. En este software, hemos creado y manipulado listas doblemente enlazadas, pilas y colas.

## 📜 Descripción del Proyecto

Este proyecto tiene como objetivo proporcionar una comprensión clara y práctica de las estructuras de datos fundamentales mediante el uso de nodos en TypeScript. A continuación, se detallan las principales clases y sus funcionalidades:

### 🔗 Lista Doblemente Enlazada (`DoublyLinkedList`)

Una lista doblemente enlazada es una estructura de datos que consiste en una secuencia de nodos, donde cada nodo contiene un valor y referencias al nodo siguiente y al nodo anterior.

#### Funcionalidades:

- **append(value: T)**: Añadir un nodo al final de la lista.
- **prepend(value: T)**: Añadir un nodo al principio de la lista.
- **removeHead()**: Eliminar el primer nodo de la lista.
- **removeTail()**: Eliminar el último nodo de la lista.
- **print()**: Imprimir todos los valores de la lista.

### 📚 Pila (`Stack`)

Una pila es una estructura de datos LIFO (Last In, First Out) donde el último elemento añadido es el primero en ser eliminado.

#### Funcionalidades:

- **push(value: T)**: Añadir un nodo al tope de la pila.
- **pop()**: Eliminar el nodo del tope de la pila.
- **isEmpty()**: Verificar si la pila está vacía.
- **print()**: Imprimir todos los valores de la pila.

### 📬 Cola (`Queue`)

Una cola es una estructura de datos FIFO (First In, First Out) donde el primer elemento añadido es el primero en ser eliminado.

#### Funcionalidades:

- **push(value: T)**: Añadir un nodo al final de la cola.
- **pop()**: Eliminar el nodo del frente de la cola.
- **isEmpty()**: Verificar si la cola está vacía.
- **print()**: Imprimir todos los valores de la cola.

## 🚀 Cómo Empezar

Para comenzar a usar este proyecto, sigue estos pasos:

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/juancamolina6/use-nodes.git
   ```

2. **Instalar Dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar el Código:**
   ```bash
   npx ts-node DoublyListNode.ts
   ```

## 🛠️ Ejemplos de Uso

### Lista Doblemente Enlazada

```typescript
const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
console.log('DoublyLinkedList desde el comienzo:');
list.print(); // Output: 10, 20, 30
```
````

### Pila

```typescript
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack después de varios push:');
stack.print(); // Output: 3, 2, 1

console.log('Elemento pop de Stack:', stack.pop()); // Output: 3
console.log('Stack después de pop:');
stack.print(); // Output: 2, 1
```

### Cola

```typescript
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Queue después de varios enqueue:');
queue.print(); // Output: 1, 2, 3

console.log('Elemento dequeue de Queue:', queue.dequeue()); // Output: 1
console.log('Queue después de dequeue:');
queue.print(); // Output: 2, 3
```

Hecho por Camilo(https://github.com/juancamolina6)

```

```
