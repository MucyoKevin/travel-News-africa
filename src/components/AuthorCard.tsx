interface IProps {
  author: string;
  createDate: string;
  updateDate: string;
  readTime: number;
}

const Author = ({ author, createDate, updateDate, readTime }: IProps) => {
  return (
    <div>
      <h6 className="font-bold text-lg ">By: {author}</h6>
      <div className="flex justify-between">
        <div>
          <span className="mr-4">Published {createDate}</span>
          <span>Updated {updateDate}</span>
        </div>
        <span className="text-gray-500">{readTime} MIN READ</span>
      </div>
    </div>
  );
};

export default Author;
