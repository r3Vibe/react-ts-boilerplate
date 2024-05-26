import { Fragment } from "react/jsx-runtime";
import { sideBarContent } from "../../utils/sideBar";
import Seperator from "./Seperator";
import SideBarLink from "./SideBarLink";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {sideBarContent.map((item, index) => {
        return (
          <Fragment key={item.title}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <SideBarLink item={item as any} />
            {index + 1 !== sideBarContent.length ? <Seperator /> : null}
          </Fragment>
        );
      })}
    </div>
  );
}
