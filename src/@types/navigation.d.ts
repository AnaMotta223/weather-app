export type PropsStack = {
    Home: undefined;
    Weather: undefined;
}

declare global {
    namespace ReactNavigation{
        interface RootParamList extends PropsStack {}
    }
}