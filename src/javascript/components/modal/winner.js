import { createFighterImage } from '../fighterPreview';
import showModal from './modal';

export default function showWinnerModal(fighter) {
    // call showModal function
    const winnerImage = createFighterImage(fighter);
    const showModalData = {
        title: `${fighter.name} WIN THE BATTLE !`,
        bodyElement: winnerImage
    };
    showModal(showModalData);
}
