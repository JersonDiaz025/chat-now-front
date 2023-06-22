import { useAtom } from "jotai";
import { contentSidebar } from "../store";

export default function useRenderContentSidebar() {
  const [activeContent, setActiveContent] = useAtom(contentSidebar);

  const handleRenderContent = (id) => {
    setActiveContent(id);
  };

  return { activeContent, handleRenderContent };
}
