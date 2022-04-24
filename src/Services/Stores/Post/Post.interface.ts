export namespace post {

    export type ItemInfo = {
        id: number,
        title: string,
        date: TDate,
        pic: string,
        author: string,
        category: string,
        body: string,
        tag: Array<string>,
        comments: TComment[]
    }

    type TDate = {
        year: string,
        month: string,
        day: string,
    }

    type TComment = {
        date: string,
        author: string,
        text: string,
        likes: string,
    }

}
