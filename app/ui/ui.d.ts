interface IMenuElement {
    link: string;
    name: string;
    children?: Array<IMenuElement>;
}

interface IIcon {
    objectName: IconDefinition;
    className: string;
}

interface IInput {
    class: string;
    placeholder: string;
    additionalClasses?: string;
    leftIcon?: IIcon;
    rightIcon?: IIcon;
}