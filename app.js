

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "No elements in stack";
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// class QueueUsingStacks {
//     constructor() {
//         this.stack1 = new Stack();
//         this.stack2 = new Stack();
//     }

//     enqueue(element) {
//         this.stack1.push(element);
//     }

//     dequeue() {
//         if (this.stack2.isEmpty()) {
//             while (!this.stack1.isEmpty()) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         if (!this.stack2.isEmpty()) {
//             return this.stack2.pop();
//         }
//         return "Underflow";
//     }

//     front() {
//         if (this.stack2.isEmpty()) {
//             while (!this.stack1.isEmpty()) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         if (!this.stack2.isEmpty()) {
//             return this.stack2.peek();
//         }
//         return "Queue is empty";
//     }

//     isEmpty() {
//         return this.stack1.isEmpty() && this.stack2.isEmpty();
//     }

//     size() {
//         return this.stack1.size() + this.stack2.size();
//     }
// }

// // Example usage:
// let queue = new QueueUsingStacks();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log("Front element is:", queue.front()); // Output: Front element is: 10
// console.log("Removed element is:", queue.dequeue()); // Output: Removed element is: 10
// console.log("Front element is:", queue.front()); // Output: Front element is: 20
// console.log("Queue size is:", queue.size()); // Output: Queue size is: 2

// queue.enqueue(40);
// console.log("Queue size is:", queue.size()); // Output: Queue size is: 3
// console.log("Removed element is:", queue.dequeue()); // Output: Removed element is: 20
// console.log("Removed element is:", queue.dequeue()); // Output: Removed element is: 30
// console.log("Removed element is:", queue.dequeue()); // Output: Removed element is: 40
// console.log("Queue size is:", queue.size()); // Output: Queue size is: 0
// console.log("Queue is empty:", queue.isEmpty()); // Output: Queue is empty: true
















