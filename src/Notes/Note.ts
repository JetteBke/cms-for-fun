export interface Note {
    id?: number
    createdAt: number
    updatedAt: number
    text: string
}

export const NoteFixture: Array<Note> = [
    {
        text: 'this is a very short note',
        createdAt: 1625334000000,
        updatedAt: 1625334800000
    },
    {
        text: 'this is another very short note',
        createdAt: 1615334000001,
        updatedAt: 1615334800002
    },
    {
        text: 'this is another very short note and more are coming',
        createdAt: 1615334000002,
        updatedAt: 1615334800003
    }
]