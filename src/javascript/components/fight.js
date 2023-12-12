import controls from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(firstFighter);
        }, 3000);
        // resolve the promise with the winner when fight is over
    });
}

export function getDamage(attacker, defender) {
    // return damage
}

export function getHitPower(fighter) {
    // return hit power
}

export function getBlockPower(fighter) {
    // return block power
}
