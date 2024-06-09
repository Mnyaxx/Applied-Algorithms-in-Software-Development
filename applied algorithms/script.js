class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {
        return this.queue.shift().element;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, start) {
    const distances = {};
    const pq = new PriorityQueue();

    
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const currentVertex = pq.dequeue();

        for (let neighbor in graph[currentVertex]) {
            const distance = graph[currentVertex][neighbor];
            const newDistance = distances[currentVertex] + distance;

            
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                pq.enqueue(neighbor, newDistance);
            }
        }
    }

    return distances;
}

// Example
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const result = dijkstra(graph, 'A');
console.log(result); 
