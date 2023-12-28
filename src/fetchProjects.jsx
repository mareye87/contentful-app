import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "evhgnwglbzrm",
  environment: "master",
  accessToken: "n56jgOBGg9-JSl2vuIlt1nGdZqA7iWxJqawdrqwxCKA",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      const projects = response.items.map((item) => {
        const { url, title, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;

        return { title, url, img, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
