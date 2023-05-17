const builder = (data: IContentfulData): ICourse => {
    return {
        topImage: data.fields.topCourseImage.fields.file.url,
        slug: data.fields.slug,
        courseName: data.fields.courseName,
        preText: data.fields.preText.content[0].content[0].value,
        modules: buildModule(data.fields.modules),
        postText: data.fields.postText.content[0].content[0].value,
        questionaire: {
            title: data.fields.questionaire.fields.title,
            slug: data.fields.questionaire.fields.slug
        },
        bottomCourseImage: data.fields.bottomCourseImage.fields.file.url,
        bottomTitle: data.fields.bottomTitle,
        bottomText: data.fields.bottomText.content[0].content[0].value
    }
};

const buildModule = (moduleArray: Partial<any>): ICourseModule[] => {
    let modules: ICourseModule[] = [];
    moduleArray.forEach((module: Partial<any>) => {
        modules.push({
            title: module.fields.title,
            slug: module.fields.slug,
            lessons: buildEntity<ILesson[]>(module.fields.lessons)
        })
    });

    return modules;
}

function buildEntity<T>(dataArray: Partial<any>): T {
    let produced: unknown[] = [];
    dataArray.forEach((data: Partial<any>) => {
        produced.push({
            icon: true,
            title: data.fields.title,
            slug: data.fields.slug
        })
    });

    return produced as T;
}


export { builder };

