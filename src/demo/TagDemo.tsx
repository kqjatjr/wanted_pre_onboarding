import { useState } from "react";
import { nanoid } from "nanoid";
import Tag, { TTag } from "../components/Tag";
import styles from "./TagDemo.module.scss";

const TagDemo = () => {
  const [tags, setTags] = useState<TTag[]>([]);

  const handleRemoveTag = (target: TTag) => {
    setTags((prev) => prev.filter((tag) => tag.id !== target.id));
  };

  const handleAddTag = (target: TTag) => {
    setTags((prev) => [...prev, target]);
  };

  return (
    <div className={styles.container}>
      <label className={styles.title}>Tag</label>
      <Tag
        tagArray={tags}
        onRemoveTag={handleRemoveTag}
        onAddTag={handleAddTag}
        delimiters={[",", "Space", "Enter"]}
        idGenerator={() => nanoid()}
      />
    </div>
  );
};

export default TagDemo;
