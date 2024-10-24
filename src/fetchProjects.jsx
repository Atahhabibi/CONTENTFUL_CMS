import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "y6amvht4opcl",
  environment: "master",
  accessToken: "l5Ts2H4u-fHOKMSiig-neW2KTP0tz9QxZgk79io1nc4",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });

      const items = response.items.map((item) => {
        const { title, url, image } = item?.fields;
        const id=item.sys.id; 
        const imageUrl = image?.fields?.file?.url;

        return { title, url, imageUrl,id };
      });

      setProjects(items);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, loading };
};
