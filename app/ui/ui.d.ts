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
    showRules?: boolean;
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

interface IPageProps {
    params: { slug: string };
}

interface IHeaderData {
    title: string;
    image: string;
}

interface ILesson {
    icon: boolean;
    title: string;
    slug: string;
    status?: boolean;
}

interface IAnswer {
    answerText: string;
    isCorrect: boolean;
}

interface IQuestion {
    question: string;
    answers: IAnswer[];
}

interface IQuestionaire {
    title: string;
    slug: string;
    preText?: string;
    questions?: IQuestion[];
    afterText?: string;
}

interface ICourseModule {
    title: string;
    slug: string;
    lessons?: ILesson[];
    questionaire?: IQuestionaire;
}

interface ICourse {
    topImage: string;
    slug: string;
    courseName: string;
    preText: string;
    modules: ICourseModule[];
    postText: string;
    questionaire: IQuestionaire;
    bottomCourseImage: string;
    bottomTitle: string;
    bottomText: string;
};