import { Box } from "./Box"

/**
 * Enumeration of the eight possible layouts of {@linkcode Box} objects on a 
 * flashcard.
 */
enum CardLayout {
    /**
     * Layout where one box takes up the whole flashcard.
     */
    ONE_BOX = "card-layout-one-box",
    /**
     * Layout where two vertical boxes next to each other take up the whole 
     * flashcard.
     */
    TWO_BOXES_V = "card-layout-two-boxes-v",
    /**
     * Layout where two horizontal boxes, one above the other, take up the 
     * whole flashcard.
     */
    TWO_BOXES_H = "card-layout-two-boxes-h",
    /**
     * Layout where one vertical box on the left side of the card is next to 
     * two boxes, one on top of the other, on the right side of the card.
     */
    ONE_BOX_LV_TWO_BOXES_RV = "card-layout-one-box-lv-two-boxes-rv",
    /**
     * Layout where one vertical box on the right side of the card is next to 
     * two boxes, one on top of the other, on the left side of the card.
     */
    ONE_BOX_RV_TWO_BOXES_LV = "card-layout-one-box-rv-two-boxes-lv",
    /**
     * Layout where one horizontal box on the top of the card is above two 
     * boxes, one next to the other, on the bottom of the card.
     */
    ONE_BOX_TH_TWO_BOXES_BH = "card-layout-one-box-th-two-boxes-bh",
    /**
     * Layout where one horizontal box on the bottom of the card is below two 
     * boxes, one next to the other, on the top of the card.
     */
    ONE_BOX_BH_TWO_BOXES_TH = "card-layout-one-box-bh-two-boxes-th",
    /**
     * Layout where there are four equally-sized boxes, one in each corner of 
     * the box.
     */
    FOUR_BOXES = "card-layout-four-boxes"
}

export default CardLayout