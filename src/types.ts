import { DOMNode } from "html-react-parser";

export interface Post {
  title: string;
  databaseId: string;
  categories: {
    edges: {
      node: {
        name: string;
      };
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  excerpt: string;
  content: string;
  slug: string;
  id: string;
  date: string;
  author: {
    node: {
      name: string;
      firstName: string;
      lastName: string;
      id: string;
    };
  };
}

export interface HTMLParserNode {
  data: DOMNode | string;
}
