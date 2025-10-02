import { createBrowserRouter } from "react-router-dom";
import FormForEntries from "@/pages/components/DiaryPanel/FormForEntries/FormForEntries"
import ListOfEntries from "@/pages/components/DiaryPanel/ListOfEntries/ListOfEntries"
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <FormForEntries />},
      { path: "list", element: <ListOfEntries />}
    ]
  }
])

export default router