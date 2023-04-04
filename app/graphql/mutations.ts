import { fetchAPI } from "app/library/lib";

const createComm = `mutation CREATE_COMMENT($postId: Int, $comment: String, $author: String) {
    createComment(input: {commentOn: $postId, content: $comment, author: $author}) {
      success
    }
  }
`;

export async function createComment(postId:number, comment:string, author = "Anonymous") {
    const data = await fetchAPI(createComm, {
      variables: { postId, comment, author },
    });
    return data;
  }
  