import { createFighterImage } from '../fighterPreview';
import showModal from './modal';

/*
Task done:
- call showModal function and display the winner
*/
export default function showWinnerModal(fighter) {
    const winnerImage = createFighterImage(fighter);
    const showModalData = {
        title: `${fighter.name} WIN THE BATTLE !`,
        bodyElement: winnerImage
    };
    showModal(showModalData);
}
