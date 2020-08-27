export type PostListInfoType = {
  curPage: number
  count : number
  totalPageCount: number
  pages? : Array<number>
}

export type PostListType = {
  location : Location
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
