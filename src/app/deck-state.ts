import { Injectable, isDevMode, signal, WritableSignal } from '@angular/core';
import { Deck } from './deck/deck';
import CardLayout from './deck/cardlayout';
import { Side } from './deck/side';
import { BoxNumber } from './deck/Box';
import { CardFace } from './deck/CardFace';
import { TextBox } from './deck/TextBox';
import { CardContentData } from './deck/CardContentData';
import { ImageBox } from './deck/ImageBox';
import { LatexBox } from './latex-box/latex-box';
import { LaTeXTextBox } from './deck/LaTeXTextBox';

const updateSide = (deck: Deck, cardIndex: number, side: Side, newValue: CardFace): Deck => ({
  ...deck,

  cards: [
    ...deck.cards.slice(0, cardIndex),
    {
      front: (side === Side.FRONT) ? newValue : deck.cards[cardIndex].front,
      back: (side === Side.BACK) ? newValue : deck.cards[cardIndex].back
    },
    ...deck.cards.slice(cardIndex + 1)
  ]
})


@Injectable({
  providedIn: 'root',
})
export class DeckState {
  #deck: WritableSignal<Deck | null> = signal(Deck.makeDefault())

  readonly deck = this.#deck.asReadonly()

  /**
   * Sets the deck state to a newly constructed blank Deck object.
   */
  newBlankDeck() {
    this.#deck.set(Deck.makeDefault())
    if (isDevMode()) {
      console.info("Set deck state to a new blank deck object.")
    }
  }

  /**
   * If the provided string is a valid .deck JSON file, then this method will 
   * initialize the deck state with a new deck object from the JSON, returning 
   * true. Otherwise, it will return false.
   */
  openDeck(fileContents: string): boolean {
    try {
      const json = JSON.parse(fileContents)
      if (Deck.isDeck(json)) {
        this.#deck.set(json)

        if (isDevMode()) {
          console.info("Set deck state to the uploaded deck file.")
        }
        
        return true // successfully loaded deck
      }
    } catch {
      // ignore the error object, the error message means the 
      // JSON isn't valid
    }

    if (isDevMode()) {
      console.warn("Invalid deck file uploaded.")
    }
    
    return false // did not load deck
    
  }

  /**
   * Set layout for one side of a specific card to a specified value. Returns 
   * true if this process is successful, false otherwise.
   * @param cardIndex index of card to update.
   * @param side side of card to update.
   * @param layout new layout to use.
   * @returns whether the update to this card's layout was successful or not.
   */
  setLayout(cardIndex: number, side: Side, layout: CardLayout): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {
      
      if (isDevMode()) {
        console.info(`Updating ${side} of card ${cardIndex} to the ${layout} layout`)
      }

      this.#deck.set(updateSide(
        deck, cardIndex, side, {
          ...deck.cards[cardIndex][side],
          layout: layout
        }
      ))
      return true
    } else {

      if (isDevMode()) {
        console.warn(`Unable to update ${side} of card ${cardIndex} to the ${layout} layout`)
      }

      return false
    }
  }

  createTextArea(cardIndex: number, side: Side, box: BoxNumber): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {

      const currentValue = deck.cards[cardIndex][side].box[box]
      if (currentValue === null) {
        
        if (isDevMode()) {
          console.info(`Creating empty text area in box ${box} on ${side} of card ${cardIndex}`)
        }

        const newTextBox: TextBox = {
          type: CardContentData.Type.PLAIN_TEXT,
          text: ""
        }
        
        this.#deck.set(updateSide(
          deck, cardIndex, side, {
            ...deck.cards[cardIndex][side],
            box: {
              ...deck.cards[cardIndex][side].box,
              [box]: newTextBox
            }
          }
        ))

        return true

      }
      
    }

    if (isDevMode()) {
      console.warn(`Unable to create empty text area in box ${box} on ${side} of card ${cardIndex}`)
    }
    return false
  }

  setText(cardIndex: number, side: Side, box: BoxNumber, text: string): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {

      const currentValue = deck.cards[cardIndex][side].box[box]
      if (TextBox.isTextBox(currentValue)) {
        
        if (isDevMode()) {
          console.info(`Updating text in box ${box} on ${side} of card ${cardIndex} to "${text}"`)
        }

        const newTextBox: TextBox = {
          type: CardContentData.Type.PLAIN_TEXT,
          text: text
        }
        
        this.#deck.set(updateSide(
          deck, cardIndex, side, {
            ...deck.cards[cardIndex][side],
            box: {
              ...deck.cards[cardIndex][side].box,
              [box]: newTextBox
            }
          }
        ))

        return true

      }
      
    }

    if (isDevMode()) {
      console.warn(`Unable to update text in box ${box} on ${side} of card ${cardIndex} to "${text}"`)
    }
    return false
  }

  createImageArea(cardIndex: number, side: Side, box: BoxNumber): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {
      const currentValue = deck.cards[cardIndex][side].box[box]
      if (currentValue === null) {

        if (isDevMode()) {
          console.info(`Creating empty image area in box ${box} on ${side} of card ${cardIndex}`)
        }

        const newImageBox: ImageBox = {
          type: CardContentData.Type.IMAGE,
          base64ImageData: null
        }

        this.#deck.set(updateSide(
          deck, cardIndex, side, {
            ...deck.cards[cardIndex][side],
            box: {
              ...deck.cards[cardIndex][side].box,
              [box]: newImageBox
            }
          }
        ))

        return true

      }
    }

    if (isDevMode()) {
      console.warn(`Unable to create empty image area in box ${box} on ${side} of card ${cardIndex}`)
    }
    return false
  }

  setImage(cardIndex: number, side: Side, box: BoxNumber, base64: string | null): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {

      const currentValue = deck.cards[cardIndex][side].box[box]
      if (ImageBox.isImageBox(currentValue)) {
        
        if (isDevMode()) {
          console.info(`Updating image in box ${box} on ${side} of card ${cardIndex} to "${base64}"`)
        }

        const newImageBox: ImageBox = {
          type: CardContentData.Type.IMAGE,
          base64ImageData: base64
        }
        
        this.#deck.set(updateSide(
          deck, cardIndex, side, {
            ...deck.cards[cardIndex][side],
            box: {
              ...deck.cards[cardIndex][side].box,
              [box]: newImageBox
            }
          }
        ))

        return true

      }
      
    }

    if (isDevMode()) {
      console.warn(`Unable to update image in box ${box} on ${side} of card ${cardIndex} to "${base64}"`)
    }
    return false
  }

  createLaTeXArea(cardIndex: number, side: Side, box: BoxNumber): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {

      const currentValue = deck.cards[cardIndex][side].box[box]
      if (currentValue === null) {
        
        if (isDevMode()) {
          console.info(`Creating empty LaTeX area in box ${box} on ${side} of card ${cardIndex}`)
        }

        const newLaTeXBox: LaTeXTextBox = {
          type: CardContentData.Type.LATEX,
          latex_text: ""
        }
        
        this.#deck.set(updateSide(
          deck, cardIndex, side, {
            ...deck.cards[cardIndex][side],
            box: {
              ...deck.cards[cardIndex][side].box,
              [box]: newLaTeXBox
            }
          }
        ))

        return true

      }
      
    }

    if (isDevMode()) {
      console.warn(`Unable to create empty LaTeX area in box ${box} on ${side} of card ${cardIndex}`)
    }
    return false
  }

  setLaTeXText(cardIndex: number, side: Side, box: BoxNumber, text: string): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {

      const currentValue = deck.cards[cardIndex][side].box[box]
      if (LaTeXTextBox.isLaTeXTextBox(currentValue)) {
        
        if (isDevMode()) {
          console.info(`Updating LaTeX in box ${box} on ${side} of card ${cardIndex} to "${text}"`)
        }

        const newLaTeXBox: LaTeXTextBox = {
          type: CardContentData.Type.LATEX,
          latex_text: text
        }
        
        this.#deck.set(updateSide(
          deck, cardIndex, side, {
            ...deck.cards[cardIndex][side],
            box: {
              ...deck.cards[cardIndex][side].box,
              [box]: newLaTeXBox
            }
          }
        ))

        return true

      }
      
    }

    if (isDevMode()) {
      console.warn(`Unable to update LaTeX in box ${box} on ${side} of card ${cardIndex} to "${text}"`)
    }
    return false
  }

  deleteArea(cardIndex: number, side: Side, box: BoxNumber): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {
      if (isDevMode()) {
        console.log(`Removing box ${box} on ${side} of card ${cardIndex}`)
      }

      this.#deck.set(updateSide(
          deck, cardIndex, side, {
            ...deck.cards[cardIndex][side],
            box: {
              ...deck.cards[cardIndex][side].box,
              [box]: null
            }
          }
        ))

        return true
    }

    if (isDevMode()) {
      console.warn(`Unable to delete box ${box} on ${side} of card ${cardIndex}`)
    }
    return false
  }

  setDeckName(name: string): boolean {
    const deck = this.#deck()
    if (deck !== null) {
      this.#deck.set({
        name: name,
        cards: deck.cards
      })
      return true
    }

    return false
  }
}
