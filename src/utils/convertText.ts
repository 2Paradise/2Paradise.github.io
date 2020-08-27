export enum TagName {
  JAVASCRIPT = 'JavaScript',
  REACT = 'React',
  DOCKER = 'Docker',
  GRAPHQL = 'GraphQL',
}

export const converText = (value: string | null | undefined) => {

  if(!value) return value;

  let result: string = "";

  switch (value.toLocaleLowerCase()) {
    case "javascript":
      result = TagName.JAVASCRIPT;
      break;
    case "react":
      result = TagName.REACT;
      break;
    case "docker":
      result = TagName.DOCKER;
      break;
    case "graphql":
      result = TagName.GRAPHQL;
      break;
    default:
      result = value;
      break;
  }

  return result;
};
