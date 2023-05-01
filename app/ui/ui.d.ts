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

interface ITag {
    color: string;
    isSmall: boolean;
    title: string;
}

interface IBlogBasic {
    title: string,
    date: string,
    slug: string;
    image?: string;
    tag?: ITag;
}

interface IBlogItem extends IBlogBasic {
    text: string;
}

interface IContentfulData {
    metadata: Partial<any>,
    sys: {
      space: Partial<any>,
      id: string,
      type: string,
      createdAt: string,
      updatedAt: string,
      environment: Partial<any>,
      revision: number,
      contentType: Partial<any>,
      locale: string
    },
    fields: Partial<any>
}