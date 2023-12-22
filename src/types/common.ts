export enum RewardType {
    Coins = 'Coins',
}

export interface Reward {
    type: RewardType;
    coins: number;
}