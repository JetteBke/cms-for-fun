export interface Note {
    id?: number
    createdAt: number
    updatedAt: number
    text: string
}

export const NoteFixture: Array<Note> = [{
    text: 'this is a very short note',
    createdAt: 1625334720114,
    updatedAt: 1625334800000
}, {
    text: 'this is another very short note',
    createdAt: 1615334720114,
    updatedAt: 1615334800000
}]