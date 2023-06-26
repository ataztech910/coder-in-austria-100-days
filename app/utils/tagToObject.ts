const tagToObject = (tag: {sys : {id: string }}, isSmall: boolean): ITag => {
  let color = 'red';
  switch (tag.sys.id) {
  case 'js':
    color = 'red';
    break;
  case 'python':
    color = 'middleBlue';
    break;
  case 'reactJs':
    color = 'darkBlue';
    break;       

  }
  const parsedTag: ITag = {
    color,
    isSmall,
    title: tag.sys.id
  };
  return parsedTag;
};

export { tagToObject };