export interface State {
    form: {
        comment: string
    },
    items: string[],
    logoutBtn: boolean,
    username: string,
}

export type Mutations<M extends string, S> = {
    [K in keyof M]: (state: S, payload?: M[K]) => void
}

export interface IMutations {
    getPostList: void
    createPost: void
}

export interface IActions {
    getPostListAction : void;
    createPostAction: void;
    // subscribeAction: void;
}

export type Commit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void

export type Context<M> = {
    commit: Commit<M>
}

export type Actions<A, M = {}> = {
    [K in keyof A]: (ctx: Context<M>, payload?: A[K]) => any
}
