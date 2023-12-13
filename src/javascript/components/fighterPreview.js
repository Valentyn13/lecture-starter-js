import createElement from '../helpers/domHelper';

export function createFighterInfoFields(data) {
    const listOfelements = data.map(content => {
        const newElement = document.createElement('div');
        newElement.innerText = content;
        return newElement;
    });
    return listOfelements;
}
export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
// todo: show fighter info (image, name, health, etc.)
export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    const fightersDetailsContainer = createElement({
        tagName: 'section',
        className: 'fighter-details__container'
    });
    const fighterName = createElement({
        tagName: 'h2',
        className: 'fighter-details__name'
    });

    const fighterInfo = createElement({
        tagName: 'div',
        className: 'fighter-details__info'
    });

    if (fighter) {
        const { name, health, attack, defense } = fighter;
        const detailsInfoData = [`Health: ${health}`, `Attack: ${attack}`, `Defense: ${defense}`];
        const infoElements = createFighterInfoFields(detailsInfoData);

        fighterInfo.append(...infoElements);
        fighterName.innerHTML = name;
        const fighterImage = createFighterImage(fighter);

        fightersDetailsContainer.append(fighterName, fighterInfo);

        fighterElement.append(fighterImage, fightersDetailsContainer);
    }
    return fighterElement;
}
