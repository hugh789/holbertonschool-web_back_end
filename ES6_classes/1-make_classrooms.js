class ClassRoom {
    constructor(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
}

export default function initializeRooms() {
    return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}