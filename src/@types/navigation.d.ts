export type PropsStack = {
    Home: undefined;
    Weather: undefined;
    Error: undefined;
}

declare global {
    namespace ReactNavigation{
        interface RootParamList extends PropsStack {}
    }
}