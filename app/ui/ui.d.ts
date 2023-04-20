interface IMenuElement {
    link: string;
    name: string;
    children?: Array<IMenuElement>;
}

interface IIcon {
    objectName: IconDefinition;
    className: string;
    testId?: string;
}

interface IInput {
    placeholder?: string;
    class?: string;
    type?: string;
    title?: string;
    additionalClasses?: string;
    leftIcon?: IIcon;
    rightIcon?: IIcon;
}

interface ICard {
    imageUrl: Array<string>;
    title: string;
    description: string;
}