export interface Personaje {
    id: string,
    name: string,
    description: string,
    thumbnail: {
        extension: string,
        path: string
    },
    comics: {
        items:[{
            name: string,
            resourceURI: string
        }]
    }
}

export interface Comic{
    id: string,
    title: string
}