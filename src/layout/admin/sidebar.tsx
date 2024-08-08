import { Fragment } from "react";
import { Card, List } from "@material-tailwind/react";
import SidebarHeader from "@layout/admin/SidebarHeader";
import {AdminSideBarItems} from "@component/routes";
import {SidebarItemProps} from "@type/index.types";
import SidebarItems from "@layout/SidebarItems";

interface SidebarProps {
  siteId: string;
}

const Sidebar = ({ siteId }: SidebarProps) => {
  const sidebarItems = AdminSideBarItems(siteId);

  return (
    // @ts-ignore
    <Card className="h-screen w-full p-4 shadow-xl shadow-blue-gray-900/5 bg-pry rounded-none">
      <SidebarHeader />

      {/*// @ts-ignore*/}
      <List className="flex flex-col gap-3 overflow-auto">
        {sidebarItems.length >= 1 &&
          sidebarItems.map((sidebar: SidebarItemProps, idx: number) => {
            return (
              <Fragment key={`${idx}_${sidebar.item}_${sidebar.route}_${sidebar.Icon}`}>
                <SidebarItems
                  item={sidebar?.item}
                  route={sidebar?.route}
                  Icon={sidebar?.Icon}
                  child={sidebar?.child ? sidebar?.child : null}
                />
              </Fragment>
            );
          })}
      </List>
    </Card>
  );
};

export default Sidebar;
