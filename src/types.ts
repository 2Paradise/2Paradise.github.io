export type Site = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

export type PostListInfoType = {
  curPage: number
  count : number
  totalPageCount: number
  pages? : Array<number>
}

export type PostListType = {
  data : AllMarkdownRemark
}

export type PostPropsType = {
  post : Node
  site : any
}

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges
  }
  site? : Site
};

export type Edge = {
  node: Node
};

export type Edges = Array<Edge>;

export type Node = {
  fields: {
    slug: string
  }
  frontmatter: {
    hide : boolean
    type : string
    title : string
    desc?: string
    tag? : Array<string>
    date? : string
  }
  html: string
  id: string
};

export type MarkdownRemark = Node;

export type CommonColorType = {
  green?: string
  red?: string
  white?: string
  blue?: string
  black?: string
}
