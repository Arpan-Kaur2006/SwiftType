const words = {
    short: [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "it",
    "for", "not", "on", "with", "he", "as", "you", "do", "at", "this",
    "but", "his", "by", "from", "they", "we", "say", "her", "she", "or",
    "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
    ],
    medium: [
    "about", "after", "again", "along", "also", "another", "around", "because",
    "before", "between", "bring", "build", "change", "could", "every", "found",
    "given", "great", "group", "house", "large", "learn", "leave", "light",
    "might", "never", "night", "often", "other", "place", "point", "power",
    "right", "river", "should", "small", "sound", "still", "study", "their",
    "thing", "think", "those", "three", "under", "until", "water", "where",
    "which", "world", "would", "write", "young", "above", "below", "close",
    ],
    long: [
    "beautiful", "beginning", "carefully", "certainly", "community", "complete",
    "consider", "continue", "different", "direction", "discovery", "education",
    "everything", "excellent", "experience", "important", "including", "knowledge",
    "language", "listening", "materials", "measuring", "necessary", "operation",
    "organized", "paragraph", "political", "presented", "president", "producing",
    "questions", "recognize", "represent", "resources", "satisfied", "something",
    "sometimes", "structure", "surprised", "technology", "temperature", "together",
    ],
};

const sentences = {
    short: [
    "The sun sets in the west.",
    "She reads every single day.",
    "Birds fly south in winter.",
    "He wrote a short letter.",
    "The cat sat on the mat.",
    "Water boils at one hundred degrees.",
    "They walked home after school.",
    "I enjoy listening to music.",
    "The dog barked at the door.",
    "She smiled and waved goodbye.",
    ],
    medium: [
    "The quick brown fox jumps over the lazy dog near the river.",
    "Learning a new skill takes time, patience, and consistent effort.",
    "She opened the window and let the cool morning breeze flow in.",
    "The library was quiet except for the soft sound of turning pages.",
    "He decided to take a different route home and discovered a new park.",
    "Technology has changed the way people communicate with each other.",
    "The mountain trail was steep but offered a breathtaking view at the top.",
    "Reading books regularly can improve your vocabulary and critical thinking.",
    ],
    long: [
    "The history of computing is a fascinating journey from mechanical calculators to powerful machines that fit in the palm of your hand.",
    "Scientists around the world are collaborating on research that could fundamentally change our understanding of the universe and our place in it.",
    "She had always dreamed of traveling the world and experiencing different cultures, and finally after years of saving, her dream was becoming a reality.",
    "Modern programming languages have abstracted away much of the complexity of working directly with hardware, allowing developers to focus on solving problems.",
    ],
};

const code = {
    short: [
    "for i in range(10):\n    print(i)",
    "x = [1, 2, 3, 4, 5]\nprint(sum(x))",
    "while True:\n    break",
    "def greet(name):\n    return f'Hello, {name}'",
    ],
    medium: [
    "for i in range(10):\n    if i % 2 == 0:\n        print(f'{i} is even')\n    else:\n        print(f'{i} is odd')",
    "def factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result",
    "count = 0\nwhile count < 5:\n    print(f'count is {count}')\n    count += 1",
    ],
    long: [
    "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr",
    "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1",
    ],
};

export function getText(mode, length) {
    if (mode === "words") {
    const pool = words[length];
    const count = length === "short" ? 30 : length === "medium" ? 40 : 50;
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    return result.join(" ");
    }
    if (mode === "sentences") {
    const pool = sentences[length];
    const count = length === "short" ? 3 : length === "medium" ? 2 : 1;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).join(" ");
    }
    if (mode === "code") {
    const pool = code[length];
    return pool[Math.floor(Math.random() * pool.length)];
    }
}