import { Card } from "./deck/Card";
import { Deck } from "./deck/deck";
import { arrayToShuffled } from "array-shuffle"

export enum ReviewOrder {
    IN_ORDER = "In order",
    REVERSE_ORDER = "Reverse order",
    RANDOM = "Random"
}

export type ReviewOrderGenerator = Generator<number, null, unknown>

export const inOrderGenerator = function*(deck: Deck): ReviewOrderGenerator {
    for (let i = 0; i < deck.cards.length; i++) {
        yield i
    }
    return null
}

export const reverseOrderGenerator = function*(deck: Deck): ReviewOrderGenerator {
    for (let i = deck.cards.length - 1; i >= 0; i--) {
        yield i
    }
    return null
}

export const randomOrderGenerator = function*(deck: Deck): ReviewOrderGenerator {
    const indices = deck.cards.map((_, index) => index)
    yield* arrayToShuffled(indices)
    return null
}

export const orderGenerator = (order: ReviewOrder, deck: Deck): ReviewOrderGenerator => {
    switch (order) {
        case ReviewOrder.IN_ORDER:
            return inOrderGenerator(deck)
        case ReviewOrder.REVERSE_ORDER:
            return reverseOrderGenerator(deck)
        case ReviewOrder.RANDOM:
            return randomOrderGenerator(deck)
    }
}

