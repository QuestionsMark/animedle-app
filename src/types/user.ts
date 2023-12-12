export namespace User {
    export interface ContextValue {
        id: string;
        username: string;
    }

    export interface RankingItem {
        id: string;
        username: string;
        points: number;
        bestWinStreak: number;
        avatar: string;
    }
}